import type { Metadata } from 'next'
import Image from 'next/image'
import CTABanner from '@/components/CTABanner'
import { siteConfig } from '@/lib/site-config'
import { getServiceImagePath } from '@/lib/image-mapping'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Value Engineering and Pre-Construction Assistance | South Florida',
  description: 'Site work planning, value engineering, and pre-construction consulting across South Florida. Optimize your construction project costs and timeline.',
  openGraph: {
    title: 'Value Engineering and Pre-Construction Assistance | South Florida',
    description: 'Site work planning, value engineering, and pre-construction consulting across South Florida.',
    url: `${siteConfig.url}/services/site-work-site-development/value-engineering-preconstruction/`,
  },
}

export default function ValueEngineeringPreconstructionPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Value Engineering and Pre-Construction Assistance</h1>
          <div className={styles.heroContent}>
            <div>
              <p className={styles.intro}>
                Site work planning, value engineering, and pre-construction consulting across South Florida. 
                We help optimize your construction project costs, timeline, and approach before breaking 
                ground.
              </p>
              <p className={styles.description}>
                Value engineering and pre-construction assistance identify opportunities to reduce costs, 
                improve efficiency, and avoid delays. We coordinate with engineers, architects, and 
                contractors to develop optimized site work plans that meet your budget and timeline 
                requirements.
              </p>
            </div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/images/services/value-engineering.jpg"
                alt="Value engineering and pre-construction assistance services in South Florida"
                fill
                className={styles.heroImage}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Who This Service Is For</h2>
            <p className={styles.intro}>
              Our value engineering and pre-construction assistance services serve developers, general 
              contractors, property owners, and architects who want to optimize site work costs and 
              approaches before construction begins.
            </p>
            <p className={styles.text}>
              Whether you&apos;re planning a new development, evaluating site work options, or looking 
              to reduce construction costs, we provide expert analysis and recommendations to help you 
              make informed decisions and optimize your project.
            </p>

            <div className={styles.highlightBox}>
              <h3 className={styles.highlightTitle}>Typical Project Sizes</h3>
              <p className={styles.highlightText}>
                Value engineering and pre-construction assistance is valuable for projects of all sizes, 
                from <strong>$25,000</strong> custom home site work to multi-million dollar commercial 
                developments. The cost savings from value engineering often far exceed the consulting 
                investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.heading}>Value Engineering and Pre-Construction Services</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Site Work Planning</h3>
              <p className={styles.serviceDescription}>
                Comprehensive site work planning including phasing, sequencing, and coordination strategies. 
                We develop detailed plans that optimize costs, minimize delays, and ensure proper 
                sequencing of site work activities.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Cost Optimization Analysis</h3>
              <p className={styles.serviceDescription}>
                Analysis of site work approaches to identify cost-saving opportunities without compromising 
                quality or compliance. We evaluate alternatives and recommend the most cost-effective 
                solutions for your project.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Value Engineering Studies</h3>
              <p className={styles.serviceDescription}>
                Systematic value engineering studies that evaluate site work functions and identify 
                alternatives that provide the same or better performance at lower cost. We focus on 
                achieving value while maintaining quality and compliance.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Permit Strategy Development</h3>
              <p className={styles.serviceDescription}>
                Development of permit strategies that minimize delays and costs. We identify all required 
                permits, coordinate application timing, and develop strategies to streamline the permit 
                process.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Contractor Selection Guidance</h3>
              <p className={styles.serviceDescription}>
                Guidance on contractor selection criteria and evaluation to ensure you choose contractors 
                with the right experience, equipment, and capacity for your project. We help you make 
                informed contractor decisions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>Risk Assessment and Mitigation</h3>
              <p className={styles.serviceDescription}>
                Assessment of site work risks including soil conditions, drainage challenges, regulatory 
                requirements, and scheduling risks. We develop mitigation strategies to minimize project 
                risks and avoid costly surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Value Engineering Benefits</h2>
            <p className={styles.text}>
              Value engineering and pre-construction assistance provide significant benefits:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Cost Savings:</strong> Value engineering identifies opportunities to reduce costs 
                without compromising quality. Typical savings range from 5-15% of site work costs, often 
                far exceeding the consulting investment.
              </li>
              <li>
                <strong>Timeline Optimization:</strong> Pre-construction planning identifies potential 
                delays and develops strategies to avoid them. Proper sequencing and coordination can 
                significantly reduce project timelines.
              </li>
              <li>
                <strong>Risk Reduction:</strong> Early identification of risks allows for proactive 
                mitigation strategies. Addressing potential issues before construction begins avoids 
                costly change orders and delays.
              </li>
              <li>
                <strong>Better Decision Making:</strong> Comprehensive analysis provides the information 
                needed to make informed decisions about site work approaches, contractors, and project 
                strategies.
              </li>
              <li>
                <strong>Regulatory Compliance:</strong> Early identification of regulatory requirements 
                ensures proper planning and avoids compliance issues that could delay or derail projects.
              </li>
              <li>
                <strong>Quality Assurance:</strong> Value engineering focuses on achieving value while 
                maintaining quality. We identify alternatives that provide better performance or lower 
                cost without compromising quality standards.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>The Value Engineering Process</h2>
            <p className={styles.text}>
              Our systematic approach ensures comprehensive analysis and actionable recommendations:
            </p>
            <ol className={styles.orderedList}>
              <li>
                <strong>Project Review:</strong> We review your project plans, budget, timeline, and 
                objectives to understand your goals and constraints. This includes reviewing architectural 
                drawings, engineering specifications, and site conditions.
              </li>
              <li>
                <strong>Function Analysis:</strong> We analyze the functions that site work must perform, 
                identifying essential requirements versus preferences. This helps identify opportunities 
                for cost-effective alternatives.
              </li>
              <li>
                <strong>Alternative Development:</strong> We develop alternative approaches that can 
                achieve the same functions at lower cost or better performance. This includes evaluating 
                different phasing, sequencing, materials, and methods.
              </li>
              <li>
                <strong>Cost-Benefit Analysis:</strong> We evaluate alternatives using cost-benefit 
                analysis, considering initial costs, lifecycle costs, timeline impacts, and risk factors. 
                This provides objective data for decision-making.
              </li>
              <li>
                <strong>Recommendations:</strong> We provide detailed recommendations with supporting 
                analysis, cost estimates, and implementation guidance. Recommendations are prioritized 
                by impact and ease of implementation.
              </li>
              <li>
                <strong>Implementation Support:</strong> We provide ongoing support during implementation, 
                helping coordinate contractors and ensure value engineering recommendations are properly 
                executed.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Frequently Asked Questions</h2>
            <div className={styles.faq}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is value engineering in construction?</h3>
                <p className={styles.faqAnswer}>
                  Value engineering is a systematic process that evaluates construction functions and 
                  identifies alternatives that provide the same or better performance at lower cost. 
                  It focuses on achieving value by optimizing cost, quality, and performance.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How much can value engineering save?</h3>
                <p className={styles.faqAnswer}>
                  Value engineering typically saves 5-15% of site work costs, though savings can be 
                  higher for complex projects. The cost savings often far exceed the consulting 
                  investment, making value engineering highly cost-effective.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>When should I engage value engineering services?</h3>
                <p className={styles.faqAnswer}>
                  Value engineering is most effective when engaged early in the planning process, before 
                  final design decisions are made. However, value engineering can provide benefits at any 
                  stage of project development.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Does value engineering compromise quality?</h3>
                <p className={styles.faqAnswer}>
                  No, value engineering focuses on achieving value while maintaining quality. We identify 
                  alternatives that provide the same or better performance at lower cost, not compromises 
                  that reduce quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>Service Locations</h2>
            <p className={styles.text}>
              We provide value engineering and pre-construction assistance across all of South Florida. 
              Select your location to learn more about consulting services in your area:
            </p>
            <div className={styles.locationsGrid}>
              <a href="/services/site-work-site-development/value-engineering-preconstruction/miami/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Miami, FL</h3>
                <p className={styles.locationCounty}>Miami-Dade County</p>
                <span className={styles.locationLink}>View Miami Services →</span>
              </a>
              <a href="/services/site-work-site-development/value-engineering-preconstruction/fort-lauderdale/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Fort Lauderdale, FL</h3>
                <p className={styles.locationCounty}>Broward County</p>
                <span className={styles.locationLink}>View Fort Lauderdale Services →</span>
              </a>
              <a href="/services/site-work-site-development/value-engineering-preconstruction/west-palm-beach/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>West Palm Beach, FL</h3>
                <p className={styles.locationCounty}>Palm Beach County</p>
                <span className={styles.locationLink}>View West Palm Beach Services →</span>
              </a>
              <a href="/services/site-work-site-development/value-engineering-preconstruction/florida-keys/" className={styles.locationCard}>
                <h3 className={styles.locationTitle}>Florida Keys</h3>
                <p className={styles.locationCounty}>Monroe County</p>
                <span className={styles.locationLink}>View Florida Keys Services →</span>
              </a>
            </div>
            <p className={styles.text} style={{ marginTop: 'var(--spacing-8)' }}>
              <a href="/services/site-work-site-development/" className={styles.backLink}>
                ← Back to Site Work and Site Development
              </a>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Optimize Your Site Work Project?"
        description="Get a free consultation for value engineering and pre-construction assistance. We'll help you optimize costs, timeline, and approach for your site work project."
        showPhone={true}
      />
    </main>
  )
}

