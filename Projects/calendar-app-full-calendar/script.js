document.addEventListener("DOMContentLoaded", function() {
    const monthYear = document.getElementById('month-year');
    const datestring = document.getElementById('dateString');
    const calendarDays = document.getElementById("calendar-days");

    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();
    const today = date.getDate();

    const months = [
                "January", 
                "February", 
                "March", 
                "April", 
                "May", 
                "June",
                "July", 
                "August", 
                "September", 
                "October", 
                "November", 
                "December"
            ];


    monthYear.innerText = `${months[currentMonth]} ${currentYear}`;
    datestring.innerText = date.toDateString();

    calendarDays.innerHTML = '';

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

            for (let i = 0; i < firstDayOfMonth; i++){
                calendarDays.appendChild(document.createElement('div'));
            }

            for (let day = 1; day <= lastDayOfMonth; day++){
                const dayElement = document.createElement('div');
                dayElement.innerText = day;

                if(day === today){
                    dayElement.classList.add("today");
                }
                calendarDays.appendChild(dayElement);

            }

});















//const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
        //Calculates the day of the week on which the first day of the current month falls.
        //i - new Date(currentYear, currentMonth, 1): This creates a Date object representing the first day of the current month and year. Sample, if currentYear is 2024 and currentMonth is 6 (July, because months are zero-indexed in JavaScript), then new Date(2024, 6, 1) represents July 1, 2024.
        //ii - .getDay(): This method returns the day of the week for the specified date, where 0 corresponds to Sunday, 1 to Monday, and so on. So if July 1, 2024, is a Monday, getDay() would return 1.
                    // new Date(2024, 6, 1) represents July 1, 2024
                    // .getDay() returns the day of the week (e.g., if it's Monday, it returns 1)
                            //firstDayOfMonth: Determines the weekday (0-6) of the first day of the current month.



//const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        //Calculates the total number of days in the current month.
        //i - new Date(currentYear, currentMonth + 1, 0): This creates a Date object representing the last day of the current month. It works by creating a date for the 0th day of the next month, which effectively rolls back to the last day of the current month. For example, if currentMonth is 6 (July), currentMonth + 1 is 7 (August). The date new Date(2024, 7, 0) represents July 31, 2024.
        //ii - .getDate(): This method returns the day of the month for the specified date, which is the total number of days in the current month. So for July, this would return 31.
                    // new Date(2024, 7, 0) represents July 31, 2024
                    // .getDate() returns 31 (the day of the month)
                            //daysInMonth: Determines the total number of days (1-31) in the current month.
