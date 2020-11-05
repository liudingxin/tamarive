import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>真空</>,
    // imageUrl: "img/undraw_docusaurus_mountain.svg",
    imageUrl: "img/1.svg",
    description: (
      <>
        通过泵或泵的组合，以搬运、吸附的方式，结合腔体与密封结构的设计制造，从大气、低真空到超高真空，提供开展实验项目所需的真空环境。
      </>
    ),
  },
  {
    title: <>加热</>,
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
    title: <>气体</>,
    imageUrl: "img/3.svg",
    description: (
      <>
        根据科研项目要求，确定组成、规模和标准。设计，采购，施工一体化。完成从洁净、输配供给、工作流、安全、废料处理的综合部署。
      </>
    ),
  },
  {
    title: <>机械</>,
    // imageUrl: "img/undraw_docusaurus_mountain.svg",
    imageUrl: "img/1.svg",
    description: (
      <>
        通过泵或泵的组合，以搬运、吸附的方式，结合腔体与密封结构的设计制造，从大气、低真空到超高真空，提供开展实验项目所需的真空环境。
      </>
    ),
  },
  {
    title: <>控制</>,
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
    title: <>数据分析</>,
    imageUrl: "img/3.svg",
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
