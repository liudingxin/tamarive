import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>非标仪器定制</>,
    imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        真空、气体、热，冷黑。根据您的实验设计定制
        实现最高E-8Pa的真空环境，各种气体配比通入，加热，冷却等过程实现。从图纸，加工，调装和维护的体系化服务。
      </>
    ),
  },
  {
    title: <>试验台搭建</>,
    imageUrl: "img/undraw_docusaurus_tree.svg",
    description: (
      <>
        分子蒸馏，虹吸，激光冷却，光学等各种物理，化学实验平台的整体设计，搭建。
        <br />
        也可以对原有杂乱无章的实验环境，进行整理改造。这非常棒！
      </>
    ),
    // description: (
    //   <>
    //     Docusaurus lores. Go ahead and move your docs into the <code>docs</code>
    //     {" 这里是 "}
    //     directory.
    //   </>
    // ),
  },
  {
    title: <>实验室工程</>,
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <>
        根据科研项目要求，确定组成、规模和标准。设计，采购，施工一体化。完成从洁净、输配供给、工作流、安全、废料处理的综合部署。
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      // title={`Hello from ${siteConfig.title}`}
      title={`Scientific Instrument & Experimental Device`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/doc1")}
            >
              服务未来的诺贝尔奖得主
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
