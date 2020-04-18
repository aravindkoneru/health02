import { ChangeDetectorRef, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
    selector: 'app-tab4',
    templateUrl: './tab4.page.html',
    styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
    @ViewChild("diet1", {static: false}) calorieCanvas: ElementRef;
    @ViewChild("diet2", {static: false}) proteinCanvas: ElementRef;
    @ViewChild("diet3", {static: false}) nutritionCanvas: ElementRef;
    private diet_charts: Chart[] = [];

    @ViewChild("fitness1", {static: false}) sleepCanvas: ElementRef;
    @ViewChild("fitness2", {static: false}) activityHoursCanvas: ElementRef;
    @ViewChild("fitness3", {static: false}) activityBreakdownCanvas: ElementRef;
    private fitness_charts: Chart[] = [];


    private overview_charts: Chart[] = [];

    private show_diet_charts: boolean = false;
    private show_fitness_charts: boolean = false;
    private show_overview_charts: boolean = true;

    private chart_type: string;

    constructor(private changeDetectorRef: ChangeDetectorRef,
                private router: Router) { }

    chartTypeSelected() {
        switch (this.chart_type) {
            case "Diet":
                console.log('selected diet charts');
                this.show_diet_charts = true;
                this.show_fitness_charts = false;
                this.show_overview_charts = false;

                this.changeDetectorRef.detectChanges();
                this.showDietCharts();
                break;

            case "Fitness":
                console.log("selected fitness charts");
                this.show_diet_charts = false;
                this.show_fitness_charts = true;
                this.show_overview_charts = false;

                this.changeDetectorRef.detectChanges();
                this.showFitnessCharts();
                break;

            case "Overview":
                console.log("selected overview charts");
                this.show_diet_charts = false;
                this.show_fitness_charts = false;
                this.show_overview_charts = true;

                this.changeDetectorRef.detectChanges();
                this.showOverviewCharts();
                break;

            default:
                this.show_diet_charts = false;
                this.show_fitness_charts = false;
                this.show_overview_charts = false;
                break;
        }
    }

    showOverviewCharts() {
        console.log('showing overview charts');
    }

    showFitnessCharts() {
        this.fitness_charts[0] = new Chart(this.sleepCanvas.nativeElement, {
            type: "bar",
            data: {
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                datasets: [
                    {
                        label: "Hours of Sleep",
                        data: [5, 8, 12, 6, 3, 2, 8],
                        backgroundColor: [
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                        ],
                        borderColor: [
                            "rgba(54, 162, 235, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(54, 162, 235, 1)",
                        ],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    ]
                }
            } 
        });

        this.fitness_charts[1] = new Chart(this.activityHoursCanvas.nativeElement, {
            type: "line",
            data: {
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                datasets: [
                    {
                        label: "Hours Active",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(54, 162, 235, 0.2)",
                        borderColor: "rgba(54 ,162, 235,1)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [2, 3, 1, 0, 3, 3, 1],
                        spanGaps: false
                    }
                ]
            } 
        });

        this.fitness_charts[2] = new Chart(this.activityBreakdownCanvas.nativeElement, {
            type: "doughnut",
            data: {
                labels: ["Heavy Lifting", "Cardio", "Calisthenics", "Active Rest", "Sports/Recreation"],
                datasets: [
                    {
                        label: "Nutritional Totals",
                        data: [12, 19, 3, 5, 2],
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                        ],
                    }
                ]
            } 

        });
    
    }

    showDietCharts() {
        this.diet_charts[0] = new Chart(this.calorieCanvas.nativeElement, {
            type: "bar",
            data: {
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                datasets: [
                    {
                        label: "Logged Calorie Intake",
                        data: [2000, 2400, 1500, 2100, 1900, 3000, 2500],
                        backgroundColor: [
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                        ],
                        borderColor: [
                            "rgba(54, 162, 235, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(54, 162, 235, 1)",
                        ],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    ]
                }
            } 
        });

        this.diet_charts[1] = new Chart(this.proteinCanvas.nativeElement, {
            type: "line",
            data: {
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                datasets: [
                    {
                        label: "Protein Intake",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(54, 162, 235, 0.2)",
                        borderColor: "rgba(54 ,162, 235,1)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 81, 56, 55, 40],
                        spanGaps: false
                    }
                ]
            } 
        });

        this.diet_charts[2] = new Chart(this.nutritionCanvas.nativeElement, {
            type: "doughnut",
            data: {
                labels: ["Protein", "Carbohydrates", "Fats", "Sugar", "Iron, Vitamins, other Minerals"],
                datasets: [
                    {
                        label: "Nutritional Totals",
                        data: [12, 19, 3, 5, 2],
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                        ],
                    }
                ]
            } 

        });

    }
    
    showCalorieDetails() {
        this.router.navigate(['intake-details/'])
        console.log('showing calorie overview');
    }


    ngOnInit() {
        //@TODO: Add more graphs
    }
} 
