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
        通过真空泵或泵组，以搬运、吸附的方式，结合腔体与密封结构的设计制造，获得从大气（1.0E5Pa）到超高真空（1.0E-7Pa）的实验环境。
      </>
    ),
  },
  {
    title: <>加热</>,
    imageUrl: "img/2.svg",
    description: (
      <>
        根据目标温度，升温速率，温度均匀性要求，确定加热原理和选择加热器件。实现从常温到1200℃的实验环境。同时也提供低温解决方案。利用油导热，制冷剂或液氮，获得-70℃到-120℃低温。
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
        为了在实验中获得不同气氛环境，达到反应，保护等实验目的。提供包括，气体流量计，汇流排，阀门接头，取样瓶，气体报警器等全套实验室供气，配气系统解决方案。
      </>
    ),
  },
  {
    title: <>机械</>,
    // imageUrl: "img/undraw_docusaurus_mountain.svg",
    imageUrl: "img/4.svg",
    description: (
      <>
        我们的项目工程师，利用UG、Rhino+Vray、手绘的方式，将您头脑中设想的实验，流程与设备，跃然纸上。再配合加工技术和工艺把控，使一个又一个伟大的探索，从想法付诸行动。
      </>
    ),
  },
  {
    title: <>控制</>,
    imageUrl: "img/5.svg",
    description: (
      <>
        从设备的HMI人机界面，通过PLC，Arduino，Raspberry Pi，沟通传感器、执行机构，到上位机组态，C#定制软件开发。实现设备的自动化与交互，集中与远程管理。
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
    imageUrl: "img/6.svg",
    description: (
      <>
        依赖完善可靠的实验数据存储计划，利用专业转件对数据进行可视化，图形化操作，深度发掘数据内容，同时，更直接的展示实验成果。
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
              to={useBaseUrl("docs/Index")}
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
