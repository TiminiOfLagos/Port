import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    github,
    jira,
    figma,
    slack,
    googledocs
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technical tools I work with concurrently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={jira} title="Jira" alt="" />
        <img src={figma} title="Figma" alt="Figma" />
        <img src={github} title="Github" alt="Github" />
        <img src={slack} title="Slack" alt="Slack" />
        <img src={googledocs} title="Docs" alt="Docs" />
      </section>
    </main>
  );
}

export default Technologies;
