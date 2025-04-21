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

const projectsData = [
  {
    id: 1,
    title: "Bikers Data Project Performance Dashboard",
    description:
      "This project delivers a dynamic and interactive dashboard built on SQL-driven insights and Excel data to analyze QA efficiency, project timelines, and sprint progress. It identifies key metrics such as missed bugs, sprint completion rates, and test coverage, enabling data analysts and project managers to monitor quality assurance activities and optimize development workflows across active projects.",
    videoSrc: project1Video,
    button: {
      text: "View Full Doc",
      link:
        "https://docs.google.com/spreadsheets/d/1bB6OvGoZ5a4280jzKnGPqzgvTUjcfAY-CqkjEl2W87o/edit?usp=sharing",
    },
  },
  {
    id: 2,
    title: "Coffee Shop Sales Project: Data Analysis & Insights",
    description:
      "The Coffee Shop Sales analysis reveals that coffee is the top-selling category, followed by tea and drinking chocolate. Peak sales occur from 7 AM to 10 AM, driven by caffeine demand, with Lower Manhattan as the highest-performing location. Seasonal fluctuations indicate opportunities for targeted promotions during slower months. These insights can inform inventory planning and marketing strategies to improve overall efficiency and profitability",
    videoSrc: project2Video,
    button: {
      text: "View Full Doc",
      link:
        "https://docs.google.com/spreadsheets/d/1vqJ8bpHMRlVNXnqHYJXUQgXGYuA5MZ2ApGwdv2AZ-XI/edit?usp=sharing",
    },
  },
  {
    id: 3,
    title: "Data Cleaning and Wrangling in Excel",
    description:
      "This Excel file demonstrates techniques for cleaning and organizing raw data to make it analysis-ready. It covers tasks such as removing duplicates, correcting inconsistencies, handling missing entries, and restructuring data into a more usable format. These steps help ensure the data is accurate, consistent, and well-prepared for further analysis or reporting.",
    videoSrc: project3Video,
    button: {
      text: "View Full Doc",
      link:
        "https://docs.google.com/spreadsheets/d/1TeaQXbQYQ9eA0-cHs75PCSPTn_zcI-WvFF8IVeKJxSg/edit?usp=sharing",
    },
  },
  {
    id: 4,
    title: "Branch & SKU-Level Sales, Inventory & Order Insights",
    description:
      " A comprehensive suite of SQL queries delivering insights into branch-wise inventory valuation, monthly GMV, B2C order tracking, item-level stock, POS receivings, and SKU-based transfer orders—enabling informed decision-making across sales, supply chain, and inventory operations",
    videoSrc: project5Video,
    button: {
      text: "View Full Doc",
      link:
        "https://docs.google.com/document/d/1cMs-TJ-tZPKTQ2mVH9THFtXWAzQKId_JOhbG0yqwp-M/edit?usp=sharing",
    },
  },
  {
    id: 5,
    title:
      "QA & Sprint Insights Dashboard – Project Health and Testing Analysis",
    description:
      "These queries support QA and project analysis by checking test case coverage, project timelines, sprint completion, and missed bugs. They use joined data from issues, projects, sprints, users, and worklogs, with filters for active projects and valid statuses to ensure accurate QA and project performance reporting.",
    videoSrc: project5Video,
    button: {
      text: "View Full Doc",
      link:
        "https://docs.google.com/document/d/1QmJKXbqqEBe7SHg74cmnnkjpWTxAyRCkPoJX5S3d03c/edit?usp=sharing",
    },
  },
  {
    id: 6,
    title: "COVID-19 Data Analysis",
    description:
      "his SQL-based analysis examines COVID-19 trends by tracking cases, deaths, population, and vaccinations. It highlights Pakistan’s death rate, identifies countries with the highest infection and death rates, and compares global daily trends. Vaccination progress is analyzed using a rolling total and population comparison, with results stored in temp tables and views for future use..",
    videoSrc: project5Video,
    button: {
      text: "View Full Doc",
      link:
        "https://drive.google.com/file/d/1jTy9o5CWtb5SH-nFO1fqWfprHrPhatDh/view?usp=sharing",
    },
  },
  {
    id: 7,
    title: "🏨 Atiq Hospitality: Interactive Business Intelligence Dashboard ",
    description:
      "This interactive dashboard offers a comprehensive overview of Atiq Hospitality's key performance metrics. Visualizations track revenue by city and property, booking patterns by platform and room class, occupancy rates, and average daily rates (ADR). Detailed breakdowns and filtering options allow for in-depth analysis and strategic decision-making.",
    videoSrc: project7video,
    button: {
      text: "View Full Doc",
      link:
        "https://drive.google.com/file/d/1wXfX9wNDu2UWQ7OE8cX3CWqcwyCpl8x2/view?usp=sharing",
    },
  },
  {
    id: 8,
    title: "📊 Maven Market: Interactive Analytics Dashboard",
    description:
      "An all-in-one Power BI report delivering a comprehensive view of Maven Market's business performance. It features revenue and order trends, interactive product-level insights with drill-through analysis, and customer segmentation by demographics and geography—empowering data-driven decision-making through engaging visualizations and intuitive interactions.",
    videoSrc: project8video,
    button: {
      text: "View Full Doc",
      link:
        "https://drive.google.com/file/d/1XX4u2YU6Ftglm5Pimqn3GvnvERnuuUZS/view?usp=sharing",
    },
  },
  {
    id: 9,
    title: "📈 Adventure Works: Interactive Business Intelligence Report",
    description:
      "A dynamic Power BI report analyzing a bike shop’s performance through revenue trends, order metrics, product-level insights, and return rates. Users can interactively explore top products, drill into detailed views, filter data by country via a world map, and uncover customer patterns by income, occupation, and order behavior—all in one cohesive dashboard experience",
    videoSrc: project9video,
    button: {
      text: "View Full Doc",
      link:
        "https://drive.google.com/file/d/1RwxfkDYaPbRMmE48zE6qIv68b-YR46eG/view?usp=sharing",
    },
  },
];

class Projects extends Component {
  render() {
    const { theme } = this.props;

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

        {/* Project Cards Section */}
        <div className="projects-container">
          {projectsData.map((project, index) => (
            <React.Fragment key={project.id}>
              {(index === 0 || index === 3 || index === 6) && (
                <div className="project-heading-wrapper">
                  <h2
                    className="project-section-heading"
                    style={{ color: theme.text }}
                  >
                    {/* Conditionally render icons */}
                    {index === 0 && (
                      <>
                        <img
                          src="https://img.icons8.com/color/48/000000/microsoft-excel-2019--v1.png"
                          alt="Excel Icon"
                          width="30"
                          height="30"
                          style={{ marginRight: "10px", marginTop: "5px" }}
                        />
                        Excel-Based Projects
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
                        SQL-Based Projects
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
                  </h2>
                </div>
              )}

              <div
                className="project-card"
                style={{ backgroundColor: theme.cardColor }}
              >
                <video className="project-video" muted loop autoPlay>
                  <source src={project.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="project-info">
                  <h3 style={{ color: theme.text }}>{project.title}</h3>
                  <p style={{ color: theme.secondaryText }}>
                    {project.description}
                  </p>
                  {project.button && (
                    <a
                      href={project.button.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-button"
                      style={{ color: theme.text }}
                    >
                      {project.button.text}
                    </a>
                  )}
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
          href={
            "https://drive.google.com/drive/folders/10iwkvAzq1T9qLW2gZfISJznK5eAadqvm?usp=drive_link"
          }
        />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Projects;
