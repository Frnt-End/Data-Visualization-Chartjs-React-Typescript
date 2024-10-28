# Data Visualization API - Chart & Table

Implementing an Data Visualization using Chart.js.

Hello guys, using this starter repo I am hoping we can work on trying to have a go at using Chart.js as a tool for data visualisation. You can feel free to have fun with it exploring all the sample charts and stuff or aim to reproduce the visualisation below.

👉 [End goal](https://Frnt-End.github.io/Data-Visualization-Chartjs-React-Typescript)

![Data Visualization API](src/ui-prev-white.jpg "Data Visualization API")

### Project Details

- Fetch API data and display bar chart and table.
- the chart contain a filter menu to select a range of years to be displayed in the chart.
- The table contain pagination.

### Technologies

- React & Vite.
- Chart.js.
- Axios.
- TypeScript.
- MUI + Styled Components.

## Run project

Install all the dependencies used in this project:

`npm install`

In the project directory, you can run:

`npm run dev`

Runs the app in the development mode.\
Open [http://127.0.0.1:5173/](http://127.0.0.1:5173/) to view it in the browser.


## Documentation
https://www.chartjs.org/docs/latest/samples/information.html



# Help For BarChart:
- Create usestates for startYear and endYear
- A usestate for the chartData as an object including
    - labels: [] as string[]
    - datasets: [{

    }]
- useEffect to filter and setChartData.
- handleYearsChange