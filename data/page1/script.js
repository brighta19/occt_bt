const busCardTemplate = document.getElementById("bus-card-template");

let stops;
let routes;
let schedules;

let colorsFromGroupId = {
    [0]: ["hsl(229, 60%, 45%)", "hsl(207, 60%, 50%)"],
    [1]: ["hsl(0, 60%, 45%)", "hsl(20, 60%, 50%)"],
}

let intervalId = null;
let busCards = [];

class BusCard extends HTMLElement {
    constructor() {
        super();

        let busCardElement = busCardTemplate.content.cloneNode(true);
        let shadowRoot = this.attachShadow({mode: "open"});
        shadowRoot.appendChild(busCardElement);

        this.elements = {
            routeNameParagraph: shadowRoot.getElementById("bus-name"),
            currentStopParagraph: shadowRoot.getElementById("current-stop"),
            timeRemainingParagraph: shadowRoot.getElementById("time-remaining")
        };

        this.setRoute();
        this.setColors();
    }

    /**
     * @param {string} value
     */
    set routeName(value) {
        this.elements.routeNameParagraph.innerText = value;
    }

    /**
     * @param {any} value
     */
    set currentStop(value) {
        this.elements.currentStopParagraph.innerText =
            `At ${value}`;
    }


    /**
     * @param {(number | boolean)[]} value
     */
    set timeRemaining(value) {
        let [minutesRemaining, isLastDepartureTime, departureTimeExists] = value;
        let text = "";

        if (!departureTimeExists) {
            text = `No more buses`;
        }
        else if (minutesRemaining > 179) {
            text = `No buses at this time`;
        }
        else {
            let timeRemainingText = "";

            if (minutesRemaining > 59) {
                let hoursRemaining = Math.floor(minutesRemaining / 60);
                timeRemainingText = `${hoursRemaining} hour${hoursRemaining === 1 ? '' : 's'}`;
            }
            else {
                timeRemainingText = `${minutesRemaining} minute${minutesRemaining === 1 ? '' : 's'}`;
            }

            text = `${isLastDepartureTime ? "Last bus" : "Bus"} departs in ${timeRemainingText}`;
        }

        this.elements.timeRemainingParagraph.innerText = text;
    }

    setRoute() {
        var routeId = Number(this.dataset["routeId"]);
        this.route = this.getRoute(routeId);
        this.routeName = this.route?.name || "Unknown route";
    }

    getRoute(routeId) {
        return routes.find((e) => e.id === Number(routeId)) || null;
    }

    encodeTime(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();

        return hours * 100 + minutes;
    }

    decodeTime(number) {
        let hours = Math.floor(number / 100);
        let minutes = number % 100;

        let date = new Date();
        date.setHours(hours);
        date.setMinutes(minutes);
        date.setSeconds(0);

        return date;
    }

    setColors() {
        let colorStops = ["#000", "#555"];

        let routeGroupId = this.route ? this.route.route_group_id : -1;
        if (routeGroupId !== -1) {
            colorStops = colorsFromGroupId[routeGroupId];
        }

        this.setAttribute("style", `
            --color-1: ${colorStops[0]};
            --color-2: ${colorStops[1]};
        `);
    }

    getCurrentSchedule() {
        let day = "friday";
        let routeSchedule = this.route.schedules.find(
            (routeSchedule) => routeSchedule.days.some((d) => d === day)
        );
        return schedules.find((e) => e.id === routeSchedule.schedule_id);
    }

    getFirstStop(schedule) {
        return stops.find((stop) => stop.id === schedule.stops[0].stop_id);
    }

    getDepartureTime(schedule) {
        let date = new Date();
        return schedule.departure_times.find((e) => e > this.encodeTime(date)) || null;
    }

    isThereNextDeparturetime(schedule) {
        let date = new Date();
        let index = schedule.departure_times.findIndex((e) => e > this.encodeTime(date));
        return schedule.departure_times[index + 1] === undefined;
    }

    getMinutesRemaining(nextDepartureDate) {
        let currentDate = new Date();
        let differenceHours = nextDepartureDate.getHours() - currentDate.getHours();
        return (nextDepartureDate.getMinutes() + differenceHours * 60) - currentDate.getMinutes();
    }

    update() {
        let minutesRemaining = 0;
        let isLastDepartureTime = false;
        let departureTimeExists = false;

        let schedule = this.getCurrentSchedule();
        let stop = this.getFirstStop(schedule);

        this.currentStop = stop.name;

        let departureTime = this.getDepartureTime(schedule);
        departureTimeExists = departureTime !== null;

        if (departureTimeExists) {
            let nextDepartureDate = this.decodeTime(departureTime);
            minutesRemaining = this.getMinutesRemaining(nextDepartureDate);
            isLastDepartureTime = this.isThereNextDeparturetime(schedule);
        }

        this.timeRemaining = [minutesRemaining, isLastDepartureTime, departureTimeExists];
    }

    connectedCallback() {
        if (!this.route) return;

        if (intervalId == null) {
            intervalId = setInterval(() => {
                busCards.forEach(e => e.update());
            }, 20000);
        }

        busCards.push(this);
        this.update();
    }

    disconnectedCallback() {
        if (!this.route) return;

        var index = busCards.indexOf(this);
        if (index !== -1) {
            busCards.splice(index, 1);

            if (busCards.length === 0 && intervalId != null) {
                clearInterval(intervalId);
                intervalId = null;
            }
        }

    }
}

async function fetchJSON(url) {
    return fetch(url).then(r => r.json());
}

async function main() {
    stops = await fetchJSON('../stops.json');
    routes = await fetchJSON('../routes.json');
    schedules = await fetchJSON('../schedules.json');

    customElements.define("bus-card", BusCard);
}

main();
