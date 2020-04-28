import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js'

@Component({
    selector: 'app-intake-details',
    templateUrl: './intake-details.page.html',
    styleUrls: ['./intake-details.page.scss'],
})
export class IntakeDetailsPage implements OnInit {

    @ViewChild("calorieIntake", {static: true}) chartCanvas: ElementRef;
    private diet_chart: Chart;


    constructor() { }

    ngOnInit() {
        this.diet_chart = new Chart(this.chartCanvas.nativeElement, {
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
    }

    newPeriod(event: any) {
        let time_period = event.detail.value;

        switch (time_period) {
            case "day":

                break;

            case "week":
                this.diet_chart = new Chart(this.chartCanvas.nativeElement, {
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
            break;

            case "year":
                this.diet_chart = new Chart(this.chartCanvas.nativeElement, {
                type: "bar",
                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
                    datasets: [
                        {
                            label: "Average Daily Logged Calorie Intake",
                            data: [2000, 2400, 2120, 2100, 2500, 3000, 2500],
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
            break;

            case "month":
                let days = [];
                let data = [];
                let b_color = [];
                let bord_color = [];
                
                for(let x = 1; x < 31; x++) {
                    days.push(x.toString(10));
                    data.push(Math.floor(Math.random() * (3500-1600+1)+1600));
                    b_color.push("rgba(54, 162, 235, 0.2)")
                    bord_color.push("rgba(54, 162, 235, 1)")
                }

                this.diet_chart = new Chart(this.chartCanvas.nativeElement, {
                type: "bar",
                data: {
                    labels: days,
                    datasets: [
                        {
                            label: "Logged Calorie Intake",
                            data: data,
                            backgroundColor: b_color,
                            borderColor: bord_color,
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

                break;

        }

    }



}
