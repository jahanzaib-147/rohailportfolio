import React, { Component } from "react";
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { projectsHeader } from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

// ✅ Correctly Import Videos
import project1Video from "../../assets/videos/bikerdta.mp4";
import project2Video from "../../assets/videos/coffeeshop.mp4";
import project3Video from "../../assets/videos/dataclean.mp4";
import project5Video from "../../assets/videos/sql.mp4";
import project7video from "../../assets/videos/project8.mp4";
import project8video from "../../assets/videos/maven.mp4";
import project9video from "../../assets/videos/adventurebike.mp4";
import project10video from "../../assets/videos/dealcart.mp4"; // Example for case study video

const projectsData = [
  {
    id: 1,
    title: "Branch & SKU-Level Sales, Inventory & Order Insights",
    description:
      "This SQL project includes 5 advanced queries for retail operations. It covers Karachi branch inventory valuation using latest TP, monthly GMV calculation by branch using MRP, POS-level inventory valuation with max MRP, daily receiving summary for selected branches, and detailed IB2C order reports. Together, they help track stock value, sales, receiving, and B2C performance.",
    videoSrc: project5Video,
    fileSrc: "/pdf/branch-sku-sales.pdf", // public folder path
    fileExtension: "pdf",
    button: {
      text: "View Full Doc",
      link: "", // not needed for local download
    },
  },
  {
    id: 2,
    title:
      "QA & Sprint Insights Dashboard – Project Health and Testing Analysis",
    description:
      "TThis SQL project features three advanced queries for project management and QA tracking. It calculates missed bug ratios for February 2024 sprints, analyzes project timelines using worklog data, and summarizes sprint completion rates. Together, these queries provide a clear dashboard for monitoring QA performance, project durations, and sprint progress.",
    videoSrc: project5Video,
    fileSrc: "/pdf/qa-sprint-insights.pdf",
    fileExtension: "pdf",
    button: {
      text: "View Full Doc",
      link: "",
    },
  },
  {
    id: 3,
    title: "COVID-19 Data Analysis",
    description:
      "This SQL project analyzes COVID-19 data through 10 queries: extracting base metrics, calculating death rates in Pakistan, tracking infection percentages, identifying highest-impacted regions, aggregating continental statistics, monitoring global daily trends, and comparing vaccination progress to population size using CTEs, temp tables, and views. It delivers comprehensive insights on COVID-19's global impact across multiple dimensions.",
    videoSrc: project5Video,
    fileSrc: "/pdf/covid19-analysis.pdf",
    fileExtension: "pdf",
    button: {
      text: "View Full Doc",
      link: "",
    },
  },
  {
    id: 4,
    title: "Bikers Data Project Performance Dashboard",
    description:
      "This project delivers a dynamic and interactive dashboard built on SQL-driven insights and Excel data to analyze QA efficiency, project timelines, and sprint progress. It identifies key metrics such as missed bugs, sprint completion rates, and test coverage, enabling data analysts and project managers to monitor quality assurance activities and optimize development workflows across active projects.",
    videoSrc: project1Video,
    fileSrc: "/pdf/bikers-data-dashboard.xlsx",
    fileExtension: "xlsx",
    button: {
      text: "View Full Doc",
      link: "",
    },
  },
  {
    id: 5,
    title: "Coffee Shop Sales Project: Data Analysis & Insights",
    description:
      "The Coffee Shop Sales analysis reveals that coffee is the top-selling category, followed by tea and drinking chocolate. Peak sales occur from 7 AM to 10 AM, driven by caffeine demand, with Lower Manhattan as the highest-performing location. Seasonal fluctuations indicate opportunities for targeted promotions during slower months. These insights can inform inventory planning and marketing strategies to improve overall efficiency and profitability",
    videoSrc: project2Video,
    fileSrc: "/pdf/coffee-shop-analysis.xlsx",
    fileExtension: "xlsx",
    button: {
      text: "View Full Doc",
      link: "",
    },
  },
  {
    id: 6,
    title: "Data Cleaning and Wrangling in Excel",
    description:
      "This Excel file demonstrates techniques for cleaning and organizing raw data to make it analysis-ready. It covers tasks such as removing duplicates, correcting inconsistencies, handling missing entries, and restructuring data into a more usable format. These steps help ensure the data is accurate, consistent, and well-prepared for further analysis or reporting.",
    videoSrc: project3Video,
    fileSrc: "/pdf/data-cleaning-excel.xlsx",
    fileExtension: "xlsx",
    button: {
      text: "View Full Doc",
      link: "",
    },
  },

  {
    id: 7,
    title: "🏨 Atiq Hospitality: Interactive Business Intelligence Dashboard",
    description:
      "This healthcare dashboard offers a comprehensive view of hospital performance metrics. At the top, it displays key indicators such as Total Patients, Admissions, Discharges, Emergency Visits, and Average Length of Stay. " +
      "A time-based trend graph illustrates patient flow across days or months, enabling staff to monitor hospital occupancy. Filters allow segmentation by department (e.g., ICU, ER, General Ward), age group, gender, or disease category. " +
      "An interactive section breaks down data by hospital branches, enabling comparative analysis. The dashboard also presents readmission rates, bed utilization, and mortality or recovery percentages, depending on the facility's scope. " +
      "Drill-downs and hover features reveal granular details for individual patients, departments, or diagnoses.",
    fullDescription:
      "🔍 How This Dashboard Helps the Company: \n" +
      "1.\tResource Allocation & Staffing: \n" +
      "Monitoring patient volume and bed occupancy helps optimize doctor and nurse deployment in high-demand areas like ICU or Emergency. \n\n" +
      "2.\tQuality of Care Improvement: \n" +
      "Readmission and mortality rates highlight areas needing clinical review, ensuring better patient outcomes and accountability. \n\n" +
      "3.\tOperational Efficiency: \n" +
      "Average Length of Stay (ALOS) and discharge trends help in reducing patient backlogs and improving patient throughput. \n\n" +
      "4.\tDepartmental Insights: \n" +
      "Department-wise filtering enables leadership to evaluate which units are overburdened or underperforming. \n\n" +
      "5.\tEmergency Response Planning: \n" +
      "Emergency visit trends support better preparedness for high-traffic periods, aiding in triage planning and resource mobilization. \n\n" +
      "6.\tBranch Performance Comparison: \n" +
      "Comparing multiple hospital branches reveals which locations are meeting KPIs and which require administrative attention. \n\n" +
      "7.\tPatient Demographics Analysis: \n" +
      "Understanding trends across age groups and gender helps tailor services, facilities, and targeted awareness campaigns. \n\n" +
      "8.\tData-Driven Decision-Making: \n" +
      "With real-time and historical insights, hospital management can make informed decisions on budgeting, expansions, or policy updates.",
    videoSrc: project7video,
    fileSrc: "/pdf/hospital-dashboard.pbix",
    fileExtension: "pbix",
    summaryPdf: "/pdf/atiq-hospitality-summary.pdf",
    button: {
      text: "View Full Doc",
      link:
        "https://github.com/rohailrao/Dashboards/blob/bbe1319c3aab2d65dbc4aa3067e56b6268701fbf/Hospitality%20Domain%20project.pbix",
    },
  },
  {
    id: 8,
    title: "📊 Maven Market: Interactive Analytics Dashboard",
    description:
      "This interactive dashboard provides a comprehensive overview of product-wise performance. On the left, it shows detailed data including transactions, profit, margins, and return rates per product. The top-right displays this month's overall performance — transactions, total profit, and return count. Below that, it compares current performance with monthly targets, highlighting both progress and percentage gaps. " +
      "Users can filter results by country, drilling down further into states and even cities for granular insights. The weekly revenue trend for recent months, along with this month's revenue target, is displayed at the bottom left. Hovering over charts reveals exact values. You can also view product-specific performance by selecting a product within a chosen region. " +
      "For quick access, key performance highlights are listed with clickable links that auto-apply filters, saving time and simplifying navigation.",
    fullDescription:
      "🔍 How This Dashboard Helps the Company: \n" +
      "1.\tProduct Performance Analysis: \n" +
      "By viewing each product's transactions, profit, margin, and return percentage, high-performing and underperforming products can be identified — helping adjust product strategies. \n\n" +
      "2.\tGoal Tracking: \n" +
      "Monthly goal comparisons show how far ahead or behind the company is. If targets aren't met, timely corrective actions can be taken. \n\n" +
      "3.\tGeographic Insights (Country → State → City): \n" +
      "Tracking regional performance helps identify strong and weak markets, enabling localized marketing or sales strategies. \n\n" +
      "4.\tProduct + Location Combination Insights: \n" +
      "Analyzing specific product performance by country or city supports targeted campaigns and inventory planning. \n\n" +
      "5.\tReturn Analysis: \n" +
      "Products with high return percentages can be improved in quality or reconsidered entirely. \n\n" +
      "6.\tTrend Monitoring: \n" +
      "Weekly revenue trends help understand seasonal or month-wise behaviors for better budgeting and forecasting. \n\n" +
      "7.\tTime Saving Through Smart Filters: \n" +
      "Smart links and auto-filter options let teams quickly access data without repeated filtering — boosting efficiency. \n\n" +
      "8.\tExecutive-Level Reporting: \n" +
      "Summary notes and drill-downs make this dashboard useful for senior management looking for quick high-level insights.",

    videoSrc: project8video,
    fileSrc: "/pdf/MavenMarket_Report.pbix",
    fileExtension: "pbix",
    summaryPdf: "/pdf/maven-market-summary.pdf",
    button: {
      text: "View Full Doc",
      link:
        "https://github.com/rohailrao/Dashboards/blob/bbe1319c3aab2d65dbc4aa3067e56b6268701fbf/MavenMarket_Report.pbix",
    },
  },
  {
    id: 9,
    title: "📈 Adventure Works: Interactive Business Intelligence Report",
    description:
      "This interactive report presents a complete view of the bike shop's performance. Key metrics such as total revenue, profit, order volume, and return ratio are displayed prominently at the top. It shows month-wise revenue trends and details like monthly order and return counts. Orders are categorized into three segments, while the top 10 products by order volume are highlighted. " +
      "Users can explore deeper by hovering over product categories for detailed data or clicking on a product to update the entire report to show its specific performance. A drill-through feature provides a dedicated product page with in-depth analytics on orders, revenue, and return rates. " +
      "A country selection tab with a world map visualization allows regional analysis. Additionally, a customer-focused section provides data on unique customers, average revenue per customer, and order distribution by income level and occupation. The top 100 customers by both order count and revenue are also showcased for quick reference.",
    fullDescription:
      "🔍 How This Dashboard Helps the Company: \n" +
      "1.\tProduct-Level Insights: \n" +
      "Identify top-selling products and those with high return rates, helping in product optimization and inventory planning. \n\n" +
      "2.\tCustomer Segmentation: \n" +
      "Analyze customer behavior based on occupation and income, allowing for better-targeted marketing and personalized engagement strategies. \n\n" +
      "3.\tRevenue & Trend Analysis: \n" +
      "Track revenue and order trends month by month to spot growth periods or slowdowns — aiding strategic planning and forecasting. \n\n" +
      "4.\tTop Customer Identification: \n" +
      "Focus efforts on retaining high-value customers (top 100 by revenue/order count), which can significantly impact profitability. \n\n" +
      "5.\tGeographic Performance Evaluation: \n" +
      "The country selection tab enables businesses to tailor strategies for specific markets based on regional performance. \n\n" +
      "6.\tInteractive Exploration: \n" +
      "With hover, click, and drill-through features, users can explore performance deeply without needing multiple reports — increasing usability and saving time. \n\n" +
      "7.\tReturn Rate Control: \n" +
      "Identifying products with high returns helps refine product quality, customer communication, or return policies. \n\n" +
      "8.\tStrategic Decision-Making: \n" +
      "Real-time, visual insights make it easier for management to make data-driven decisions, boost efficiency, and improve customer satisfaction.",
    videoSrc: project9video,
    fileSrc: "/pdf/Adventureworksreports.pbix",
    fileExtension: "pbix",
    summaryPdf: "/pdf/adventure-works-summary.pdf",
    button: {
      text: "View Full Doc",
      link:
        "https://github.com/rohailrao/Dashboards/blob/bbe1319c3aab2d65dbc4aa3067e56b6268701fbf/Adventureworks%20reports.pbix",
    },
  },
  {
    id: 10,
    title: "Case Study: Data-Driven Business Insights",
    description:
      "In this case study, we dive into a data-driven approach to uncover business insights across multiple industries...",
    videoSrc: project10video,
    fileSrc: "/pdf/DealCart.pptx",
    fileExtension: "pptx",
    button: {
      text: "Read Full Case Study",
      link: "",
      download: true,
    },
  },
];

class Projects extends Component {
  constructor(props) {
    super(props);

    // Initialize state to track which descriptions are expanded
    this.state = {
      expandedDescriptions: {},
    };
  }

  toggleDescription = (projectId) => {
    this.setState((prevState) => ({
      expandedDescriptions: {
        ...prevState.expandedDescriptions,
        [projectId]: !prevState.expandedDescriptions[projectId],
      },
    }));
  };

  handleVideoClick = (project) => {
    const url = `/video-player?id=${project.id}&title=${encodeURIComponent(
      project.title
    )}&description=${encodeURIComponent(
      project.description
    )}&videoSrc=${encodeURIComponent(
      project.videoSrc
    )}&fileSrc=${encodeURIComponent(project.fileSrc || "")}`;
    window.open(url, "_blank");
  };

  // Helper function to get the filename from the project
  getFileName = (project) => {
    // Return the filename with the correct extension
    return project.title.split(":")[0].trim() + "." + project.fileExtension;
  };

  render() {
    const { theme } = this.props;
    const { expandedDescriptions } = this.state;

    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>

        <div className="projects-container">
          {projectsData.map((project, index) => (
            <React.Fragment key={project.id}>
              {(index === 0 || index === 3 || index === 6 || index === 9) && (
                <div className="project-heading-wrapper">
                  <h2
                    className="project-section-heading"
                    style={{ color: theme.text }}
                  >
                    {index === 0 && (
                      <>
                        <img
                          src="https://img.icons8.com/color/48/000000/microsoft-excel-2019--v1.png"
                          alt="Excel Icon"
                          width="30"
                          height="30"
                          style={{ marginRight: "10px", marginTop: "5px" }}
                        />
                        SQL-Based Projects
                      </>
                    )}
                    {index === 3 && (
                      <>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/4248/4248443.png"
                          alt="SQL Icon"
                          width="30"
                          height="30"
                          style={{ marginRight: "10px" }}
                        />
                        Excel-Based Projects
                      </>
                    )}
                    {index === 6 && (
                      <>
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"
                          alt="Power BI Icon"
                          width="30"
                          height="30"
                          style={{ marginRight: "10px" }}
                        />
                        Power BI Projects
                      </>
                    )}
                    {index === 9 && (
                      <>
                        <img
                          src="https://img.icons8.com/fluency/48/document.png"
                          alt="Case Study Icon"
                          width="30"
                          height="30"
                          style={{ marginRight: "10px" }}
                        />
                        Case Studies
                      </>
                    )}
                  </h2>
                </div>
              )}

              <div
                className="project-card"
                style={{ backgroundColor: theme.cardColor }}
              >
                <video
                  className="project-video"
                  muted
                  loop
                  autoPlay
                  controls
                  onClick={() => this.handleVideoClick(project)}
                  style={{ cursor: "pointer" }}
                >
                  <source src={project.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="project-info">
                  <h3 style={{ color: theme.text }}>{project.title}</h3>

                  {/* Description with conditional rendering based on expanded state */}
                  <div className="project-description">
                    {project.fullDescription &&
                    expandedDescriptions[project.id] ? (
                      project.fullDescription
                        .split("\n\n")
                        .map((paragraph, i) => (
                          <p
                            key={i}
                            style={{
                              color: theme.secondaryText,
                              marginBottom:
                                i <
                                project.fullDescription.split("\n\n").length - 1
                                  ? "15px"
                                  : "0",
                            }}
                          >
                            {paragraph}
                          </p>
                        ))
                    ) : (
                      <p style={{ color: theme.secondaryText }}>
                        {project.description}
                      </p>
                    )}
                  </div>

                  <div className="project-buttons">
                    {/* For Power BI projects (index 6-8), show PBIX download and See More buttons */}
                    {index >= 6 && index <= 8 ? (
                      <>
                        <a
                          href={project.fileSrc}
                          download={this.getFileName(project)}
                          className="project-button"
                          style={{ color: theme.text }}
                        >
                          Download PBIX
                        </a>
                        {project.fullDescription && (
                          <button
                            onClick={() => this.toggleDescription(project.id)}
                            className="project-button"
                            style={{
                              color: theme.text,
                              marginLeft: "10px",
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              fontSize: "inherit",
                              fontFamily: "inherit",
                            }}
                          >
                            {expandedDescriptions[project.id]
                              ? "See Less"
                              : "See More"}
                          </button>
                        )}
                      </>
                    ) : (
                      /* For all other projects, maintain single button behavior */
                      <a
                        href={project.button.link || project.fileSrc}
                        download={
                          !project.button.link || project.button.download
                            ? this.getFileName(project)
                            : null
                        }
                        target={project.button.link ? "_blank" : "_self"}
                        rel={project.button.link ? "noopener noreferrer" : ""}
                        className="project-button"
                        style={{ color: theme.text }}
                      >
                        {project.button.text}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>

        <Button
          text="More Projects"
          className="project-button"
          newTab={true}
          theme={theme}
          href="https://github.com/rohailrao?tab=repositories"
        />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Projects;
