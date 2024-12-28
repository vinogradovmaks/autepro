class TimelineScheduler {
    constructor() {
        this._adds = []; // array of added output tuples
        this.schedule = [];
    }

    addEvent(event) {
        this._adds.push(event);
    }

    finalizeSchedule() {
        // Sort events by their scheduled time
        this.schedule = this._adds.sort((a, b) => a.time - b.time);
    }

    getSchedule() {
        return this.schedule;
    }

    run() {
        for (const event of this.schedule) {
            setTimeout(() => {
                console.log(`Event: ${event.name} at time ${event.time}`);
                event.action();
            }, event.time);
        }
    }
}

// Example usage:
const scheduler = new TimelineScheduler();

// Adding events
scheduler.addEvent({ name: 'Event 1', time: 1000, action: () => console.log('Action 1 executed') });
scheduler.addEvent({ name: 'Event 2', time: 500, action: () => console.log('Action 2 executed') });
scheduler.addEvent({ name: 'Event 3', time: 2000, action: () => console.log('Action 3 executed') });

// Finalize the schedule to sort events by time
scheduler.finalizeSchedule();

// Get the sorted schedule (optional)
console.log(scheduler.getSchedule());

// Run the scheduled events
scheduler.run();
