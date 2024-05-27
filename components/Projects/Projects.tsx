import React from "react";
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import { Box, Grid } from "@mui/material";
import GeneralCard from "./GeneralCard";
import ParticlesLib from "../particles/Particles";
import { projectData } from "../utils/projectData";
import "./projects.css";

const Projects = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <div className="projects-container">
      <ParticlesLib />
      <Box
        sx={{
          background: darkMode
            ? "linear-gradient(90deg, rgba(132,223,51,1) 0%, rgba(205,227,188,1) 99%, rgba(136,166,95,1) 100%)"
            : "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(91,212,13,1) 100%, rgba(0,212,255,1) 100%)",
        }}
        className="projects-content-container"
      >
        <Grid
          container
          spacing={{ xs: 4, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {projectData.map((project, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
              <GeneralCard
                title={project?.title}
                description={project?.description}
                firstImageUrl={project?.firstImageUrl}
                secondImageUrl={project?.secondImageUrl}
                alt={project?.alt}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Projects;
