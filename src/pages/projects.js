import React from "react";
import Grid from "@mui/material/Grid";
import Head from "next/head";
import Container from "@mui/material/Container";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./header";

function Projects() {
  return (
    <>
      <Head>
        <title>Penceil</title>
        <meta name="description" content="Penceil" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="page_section">
        <Container>
          <h3>PROJECTS</h3>
            <Grid className={styles.projectBtns}>
              <button className={styles.projectBtn}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <path
                    d="M9.29289 17.4853L10.7071 16.0711L4.63306 9.99702H18.1954V8.00298H4.63306L10.7071 1.92893L9.29289 0.514715L0.807613 9L9.29289 17.4853Z"
                    fill="white"
                  />
                </svg>
              </button>
              <button className={styles.projectBtn}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <path
                    d="M9.70711 0.514724L8.29289 1.92894L14.3669 8.00298H0.804633V9.99702H14.3669L8.29289 16.0711L9.70711 17.4853L18.1924 9L9.70711 0.514724Z"
                    fill="white"
                  />
                </svg>
              </button>
            </Grid>
            <Grid className={styles.projects} container spacing={2}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                {/* <Image src = "" /> */}
                <div className="dummy_img"></div>
                <h3>BRANDING</h3>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                {/* <Image src = "" /> */}
                <div className="dummy_img"></div>
                <h3>Customer Relation Management</h3>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                {/* <Image src = "" /> */}
                <div className="dummy_img"></div>
                <h3>Point of sale System</h3>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                {/* <Image src = "" /> */}
                <div className="dummy_img"></div>
                <h3>New Modern Ariana</h3>
              </Grid>
              <Grid className={styles.footer}>
                <button className={styles.footerBtn}>GMAIL</button>
                <button className={styles.footerBtn}>LINKEDIN</button>
                <button className={styles.footerBtn}>CONTRA</button>
                <button className={styles.footerBtn}>BEHANCE</button>
              </Grid>
            </Grid>
        </Container>
      </section>
    </>
  );
}

export default Projects;
