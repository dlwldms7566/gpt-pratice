import React, { useState } from "react";
import styles from "../styles/LandingPage.module.css";
import IconElement from './IconElement';
import TextSection from "./TextSection"
import FooterElement from "./FooterElement";

export default function LandingPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.intro_fullcontainer}>
                <div className={`${styles.intro_container} ${isMenuOpen ? styles.menu_open : ""}`}>
                    <div className={styles.intro}>
                        <TextSection
                            content="We spent 6 months making GPT-4 safer and more aligned. GPT-4 is 82% less likely to respond to requests for disallowed content and 40% more likely to produce factual responses than GPT-3.5 on our internal evaluations."
                            className={styles.intro_content}
                        />
                    </div>
                </div>
            </div>

            <div className={styles.smalltext}>
                <h2 className={styles.smalltext_heading}>Safety & alignment</h2>
                <TextSection
                    title="Training with human feedback"
                    content="We incorporated more human feedback, including feedback submitted by ChatGPT users, to improve GPT-4’s behavior. We also worked with over 50 experts for early feedback in domains including AI safety and security."
                    isInline={true}
                    className={styles.smalltext_content}
                />
                <TextSection
                    title="Continuous improvement from real-world use"
                    content="We’ve applied lessons from real-world use of our previous models into GPT-4’s safety research and monitoring system. Like ChatGPT, we’ll be updating and improving GPT-4 at a regular cadence as more people use it."
                    isInline={true}
                    className={styles.smalltext_content}
                />
                <TextSection
                    title="GPT-4-assisted safety research"
                    content="GPT-4’s advanced reasoning and instruction-following capabilities expedited our safety work. We used GPT-4 to help create training data for model fine-tuning and iterate on classifiers across training, evaluations, and monitoring."
                    isInline={true}
                    className={styles.smalltext_content}
                />
            </div>
            <div className={styles.Buillt_container}>
                <h2 className={styles.Built_title}>Built with GPT-4</h2>
                <div className={styles.Built}>
                    <div className={styles.picture_container}>
                        <div className={styles.picture}>
                            <img alt="Duolingo" data-nosnippet="true" loading="lazy" decoding="async" data-nimg="fill" class="object-cover object-center" sizes="(min-width: 1728px) 1728px, 100vw"
                                srcset="https://images.ctfassets.net/kftzwdyauwt9/d8ea7257-15af-4ace-fe07371883a6/a6904255f5cc1d78448d989fbcaea0c2/duolingo.png?w=640&amp;q=90&amp;fm=webp 640w,
                https://images.ctfassets.net/kftzwdyauwt9/d8ea7257-15af-4ace-fe07371883a6/a6904255f5cc1d78448d989fbcaea0c2/duolingo.png?w=750&amp;q=90&amp;fm=webp 750w,
                https://images.ctfassets.net/kftzwdyauwt9/d8ea7257-15af-4ace-fe07371883a6/a6904255f5cc1d78448d989fbcaea0c2/duolingo.png?w=828&amp;q=90&amp;fm=webp 828w, 
                https://images.ctfassets.net/kftzwdyauwt9/d8ea7257-15af-4ace-fe07371883a6/a6904255f5cc1d78448d989fbcaea0c2/duolingo.png?w=1080&amp;q=90&amp;fm=webp 1080w,
                https://images.ctfassets.net/kftzwdyauwt9/d8ea7257-15af-4ace-fe07371883a6/a6904255f5cc1d78448d989fbcaea0c2/duolingo.png?w=1200&amp;q=90&amp;fm=webp 1200w, 
                https://images.ctfassets.net/kftzwdyauwt9/d8ea7257-15af-4ace-fe07371883a6/a6904255f5cc1d78448d989fbcaea0c2/duolingo.png?w=1920&amp;q=90&amp;fm=webp 1920w, 
                https://images.ctfassets.net/kftzwdyauwt9/d8ea7257-15af-4ace-fe07371883a6/a6904255f5cc1d78448d989fbcaea0c2/duolingo.png?w=2048&amp;q=90&amp;fm=webp 2048w, 
                https://images.ctfassets.net/kftzwdyauwt9/d8ea7257-15af-4ace-fe07371883a6/a6904255f5cc1d78448d989fbcaea0c2/duolingo.png?w=3840&amp;q=90&amp;fm=webp 3840w"
                                src="https://images.ctfassets.net/kftzwdyauwt9/d8ea7257-15af-4ace-fe07371883a6/a6904255f5cc1d78448d989fbcaea0c2/duolingo.png?w=3840&amp;q=90&amp;fm=webp"
                                style={{ width: "100%", height: "100%", objectFit: "contain", color: "transparent" }} />
                        </div>
                        <div className={styles.picture_caption}>
                            GPT-4 deepens the conversation on Duolingo.
                        </div>
                        <div className={styles.picture_story}>
                            Story
                        </div>
                    </div>
                    <div className={styles.picture_container}>
                        <div className={styles.picture}>
                            <img alt="Be My Eyes" data-nosnippet="true" loading="lazy" decoding="async" data-nimg="fill" class="object-cover object-center" sizes="(min-width: 1728px) 1728px, 100vw"
                                srcset="https://images.ctfassets.net/kftzwdyauwt9/7f575e80-c72a-4154-92812d284137/0798d9554fc21e616fded75f2fe3f383/be_my_eyes.png?w=640&amp;q=90&amp;fm=webp 640w,
                https://images.ctfassets.net/kftzwdyauwt9/7f575e80-c72a-4154-92812d284137/0798d9554fc21e616fded75f2fe3f383/be_my_eyes.png?w=750&amp;q=90&amp;fm=webp 750w,
                https://images.ctfassets.net/kftzwdyauwt9/7f575e80-c72a-4154-92812d284137/0798d9554fc21e616fded75f2fe3f383/be_my_eyes.png?w=828&amp;q=90&amp;fm=webp 828w,
                https://images.ctfassets.net/kftzwdyauwt9/7f575e80-c72a-4154-92812d284137/0798d9554fc21e616fded75f2fe3f383/be_my_eyes.png?w=1080&amp;q=90&amp;fm=webp 1080w,
                https://images.ctfassets.net/kftzwdyauwt9/7f575e80-c72a-4154-92812d284137/0798d9554fc21e616fded75f2fe3f383/be_my_eyes.png?w=1200&amp;q=90&amp;fm=webp 1200w,
                https://images.ctfassets.net/kftzwdyauwt9/7f575e80-c72a-4154-92812d284137/0798d9554fc21e616fded75f2fe3f383/be_my_eyes.png?w=1920&amp;q=90&amp;fm=webp 1920w,
                https://images.ctfassets.net/kftzwdyauwt9/7f575e80-c72a-4154-92812d284137/0798d9554fc21e616fded75f2fe3f383/be_my_eyes.png?w=2048&amp;q=90&amp;fm=webp 2048w,
                https://images.ctfassets.net/kftzwdyauwt9/7f575e80-c72a-4154-92812d284137/0798d9554fc21e616fded75f2fe3f383/be_my_eyes.png?w=3840&amp;q=90&amp;fm=webp 3840w"
                                src="https://images.ctfassets.net/kftzwdyauwt9/7f575e80-c72a-4154-92812d284137/0798d9554fc21e616fded75f2fe3f383/be_my_eyes.png?w=3840&amp;q=90&amp;fm=webp"
                                style={{ width: "100%", height: "100%", objectFit: "contain", color: "transparent" }} />
                        </div>
                        <div className={styles.picture_caption}>
                            Be My Eyes uses GPT-4 to transform visual accessibility.
                        </div>
                        <div className={styles.picture_story}>
                            Story
                        </div>
                    </div>
                    <div className={styles.picture_container}>
                        <div className={styles.picture}>
                            <img alt="Stripe Docs" data-nosnippet="true" loading="lazy" decoding="async" data-nimg="fill" class="object-cover object-center" sizes="(min-width: 1728px) 1728px, 100vw"
                                srcset="https://images.ctfassets.net/kftzwdyauwt9/6c20363e-30c0-486d-2e9bfa611583/b15f2e43a5a525763c966ab4562a31b2/stripe.jpg?w=640&amp;q=90&amp;fm=webp 640w,
                https://images.ctfassets.net/kftzwdyauwt9/6c20363e-30c0-486d-2e9bfa611583/b15f2e43a5a525763c966ab4562a31b2/stripe.jpg?w=750&amp;q=90&amp;fm=webp 750w,
                https://images.ctfassets.net/kftzwdyauwt9/6c20363e-30c0-486d-2e9bfa611583/b15f2e43a5a525763c966ab4562a31b2/stripe.jpg?w=828&amp;q=90&amp;fm=webp 828w,
                https://images.ctfassets.net/kftzwdyauwt9/6c20363e-30c0-486d-2e9bfa611583/b15f2e43a5a525763c966ab4562a31b2/stripe.jpg?w=1080&amp;q=90&amp;fm=webp 1080w,
                https://images.ctfassets.net/kftzwdyauwt9/6c20363e-30c0-486d-2e9bfa611583/b15f2e43a5a525763c966ab4562a31b2/stripe.jpg?w=1200&amp;q=90&amp;fm=webp 1200w,
                https://images.ctfassets.net/kftzwdyauwt9/6c20363e-30c0-486d-2e9bfa611583/b15f2e43a5a525763c966ab4562a31b2/stripe.jpg?w=1920&amp;q=90&amp;fm=webp 1920w,
                https://images.ctfassets.net/kftzwdyauwt9/6c20363e-30c0-486d-2e9bfa611583/b15f2e43a5a525763c966ab4562a31b2/stripe.jpg?w=2048&amp;q=90&amp;fm=webp 2048w,
                https://images.ctfassets.net/kftzwdyauwt9/6c20363e-30c0-486d-2e9bfa611583/b15f2e43a5a525763c966ab4562a31b2/stripe.jpg?w=3840&amp;q=90&amp;fm=webp 3840w"
                                src="https://images.ctfassets.net/kftzwdyauwt9/6c20363e-30c0-486d-2e9bfa611583/b15f2e43a5a525763c966ab4562a31b2/stripe.jpg?w=3840&amp;q=90&amp;fm=webp"
                                style={{ width: "100%", height: "100%", objectFit: "contain", color: "transparent" }} />
                        </div>
                        <div className={styles.picture_caption}>
                            Stripe leverages GPT-4 to streamline user experience and combat fraud.                    </div>
                        <div className={styles.picture_story}>
                            Story
                        </div>
                    </div>
                    <div className={styles.picture_container}>
                        <div className={styles.picture}>
                            <img alt="morgan stanley" data-nosnippet="true" loading="lazy" decoding="async" data-nimg="fill" class="object-cover object-center" sizes="(min-width: 1728px) 1728px, 100vw"
                                srcset="https://images.ctfassets.net/kftzwdyauwt9/3ma239JWrlhhzndpxv4bJZ/992e25b552a21cb1d71f045493589ee6/morgan_stanley.png?w=640&amp;q=90&amp;fm=webp 640w,
            https://images.ctfassets.net/kftzwdyauwt9/3ma239JWrlhhzndpxv4bJZ/992e25b552a21cb1d71f045493589ee6/morgan_stanley.png?w=750&amp;q=90&amp;fm=webp 750w,
            https://images.ctfassets.net/kftzwdyauwt9/3ma239JWrlhhzndpxv4bJZ/992e25b552a21cb1d71f045493589ee6/morgan_stanley.png?w=828&amp;q=90&amp;fm=webp 828w, 
            https://images.ctfassets.net/kftzwdyauwt9/3ma239JWrlhhzndpxv4bJZ/992e25b552a21cb1d71f045493589ee6/morgan_stanley.png?w=1080&amp;q=90&amp;fm=webp 1080w,
            https://images.ctfassets.net/kftzwdyauwt9/3ma239JWrlhhzndpxv4bJZ/992e25b552a21cb1d71f045493589ee6/morgan_stanley.png?w=1200&amp;q=90&amp;fm=webp 1200w,
            https://images.ctfassets.net/kftzwdyauwt9/3ma239JWrlhhzndpxv4bJZ/992e25b552a21cb1d71f045493589ee6/morgan_stanley.png?w=1920&amp;q=90&amp;fm=webp 1920w,
            https://images.ctfassets.net/kftzwdyauwt9/3ma239JWrlhhzndpxv4bJZ/992e25b552a21cb1d71f045493589ee6/morgan_stanley.png?w=2048&amp;q=90&amp;fm=webp 2048w, 
            https://images.ctfassets.net/kftzwdyauwt9/3ma239JWrlhhzndpxv4bJZ/992e25b552a21cb1d71f045493589ee6/morgan_stanley.png?w=3840&amp;q=90&amp;fm=webp 3840w"
                                src="https://images.ctfassets.net/kftzwdyauwt9/3ma239JWrlhhzndpxv4bJZ/992e25b552a21cb1d71f045493589ee6/morgan_stanley.png?w=3840&amp;q=90&amp;fm=webp"
                                style={{ width: "100%", height: "100%", objectFit: "contain", color: "transparent" }} />
                        </div>
                        <div className={styles.picture_caption}>
                            Morgan Stanley wealth management deploys GPT-4 to organize its vast knowledge base.                    </div>
                        <div className={styles.picture_story}>
                            Story
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.icon_container}>
                {/*
                <IconElement
                    src="https://images.ctfassets.net/kftzwdyauwt9/3cfdfd1a-e143-4107-fdfd2c17f872/e7ed791b2ee33da2da4b328703ee437b/climate-policy-radar.svg"
                    alt="Climate Policy Radar"
                />
                <IconElement
                    src="https://images.ctfassets.net/kftzwdyauwt9/4c404c13-aefd-47ce-50598e612fc0/d98b1765f0250473ca0d1ef755a36041/ambience.svg"
                    alt="Ambience Logo"
                />
                <IconElement
                    src="https://images.ctfassets.net/kftzwdyauwt9/a7e2fe03-7b3b-41d0-b3ac5788ae6d/1de4fd060aa90906133050cde8e9ccfb/mem.svg"
                    alt="Mem Logo"
                />
                <IconElement
                    src="https://images.ctfassets.net/kftzwdyauwt9/cd1aa8fd-af59-4c04-c5f5aeea8667/36e511e677f59836951410db3ec97f01/intercom.svg"
                    alt="Intercom Logo"
                /> */}
            </div>
            <div className={styles.green}>
                <img
                    alt="GPT-4 Line Motif"
                    className="mx-auto"
                    src="https://images.ctfassets.net/kftzwdyauwt9/b11fba8c-c51f-41c1-e8cd631b6ad8/b8f7e710414712b37d294e01d347cb46/gpt-4-motif.svg?w=3840&q=90"
                />
            </div>

            <div className={styles.smalltext}>
                <h2 className={styles.smalltext_heading}>More on GPT-4</h2>
                <TextSection
                    title="Research"
                    content={
                        <>
                            GPT-4 is the latest milestone in OpenAI’s effort in scaling up deep learning.
                            <br />
                            <a className={styles.View} href="https://openai.com/research/gpt-4" rel="noopener noreferrer">
                                View GPT-4 research
                            </a>
                        </>
                    }
                    isInline={false}
                    className={styles.smalltext_content}
                />
                <TextSection
                    title="Infrastructure"
                    content="GPT-4 was trained on Microsoft Azure AI supercomputers. Azure’s AI-optimized infrastructure also allows us to deliver GPT-4 to users around the world."
                    isInline={false}
                    className={styles.smalltext_content}
                />
                <TextSection
                    title="Limitations"
                    content="GPT-4 still has many known limitations that we are working to address, such as social biases, hallucinations, and adversarial prompts. We encourage and facilitate transparency, user education, and wider AI literacy as society adopts these models. We also aim to expand the avenues of input people have in shaping our models."
                    isInline={false}
                    className={styles.smalltext_content}
                />
                <TextSection
                    title="Availability"
                    content="GPT-4 is available on ChatGPT Plus and as an API for developers to build applications and services."
                    isInline={false}
                    className={styles.smalltext_content}
                />
                <div className={styles.contributions}>
                    <a className={styles.View} href="https://openai.com/contributions/gpt-4/" rel="noopener noreferrer">
                        View contributions
                    </a>
                </div>
            </div>
            <div className={styles.bigtext_fullcontainer}>
                <div className={styles.bigtext_container}>
                    <div className={styles.bigtext}>
                        <TextSection
                            content="We’re excited to see how people use GPT-4 as we work towards developing technologies that empower everyone."
                            className={styles.bigtext_content}
                        />
                    </div>
                    <div>
                        <div className={styles.twobuttons}>
                            <button className={styles.round_button}>Try on ChatGPT Plus
                                <svg width="11" style={{ transform: "translate(1px, -1px)" }} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.70985 4.5H7.7804M7.7804 4.5V10.5705M7.7804 4.5L0.780396 11.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>
                            <button className={styles.plain_button}>View GPT-4 research
                                <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 10 16" fill="none">
                                    <path d="M0.209209 5.35206C0.488154 5.07312 0.940415 5.07312 1.21936 5.35206L5.00001 9.1327L8.78064 5.35206C9.05958 5.07312 9.51184 5.07312 9.79079 5.35206C10.0697 5.63101 10.0697 6.08327 9.79079 6.36221L5.50509 10.6479C5.37114 10.7819 5.18945 10.8571 5.00001 10.8571C4.81057 10.8571 4.62889 10.7819 4.49494 10.6479L0.20921 6.36222C-0.0697361 6.08327 -0.0697368 5.63101 0.209209 5.35206Z" fill="currentColor"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.footer_container}>
                    <div className={styles.footer_top}>
                        {/* 첫번째 열 */}
                        <div className={styles.footer_column}>
                            <FooterElement
                                title="Our Research"
                                links={[
                                    { href: "https://openai.com/research/index/", text: "Research Index" },
                                    { href: "https://openai.com/research/", text: "Research Overview" },
                                    { href: "https://openai.com/residency/", text: "Research Residency" }
                                ]}
                            />
                            <FooterElement
                                title="Latest Advancements"
                                links={[
                                    { href: "https://openai.com/index/learning-to-reason-with-llms/", text: "OpenAI o1" },
                                    { href: "https://openai.com/index/openai-o1-mini-advancing-cost-efficient-reasoning/", text: "OpenAI o1-mini" },
                                    { href: "https://openai.com/index/gpt-4o-system-card/", text: "GPT-4o" },
                                    { href: "https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence/", text: "GPT-4o mini" },
                                    { href: "https://openai.com/index/sora-system-card/", text: "Sora" }
                                ]}
                            />
                            <FooterElement
                                title="Safety"
                                links={[
                                    { href: "https://openai.com/safety/", text: "Safety Approach" },
                                    { href: "https://openai.com/security-and-privacy/", text: "Security & Privacy" }
                                ]}
                            />
                        </div>
                        {/* 두번째 열 */}
                        <div className={styles.footer_column}>
                            <FooterElement
                                title="ChatGPT"
                                links={[
                                    { href: "https://openai.com/chatgpt/overview/", text: "Explore ChatGPT" },
                                    { href: "https://openai.com/chatgpt/team/", text: "Teams" },
                                    { href: "https://openai.com/chatgpt/enterprise/", text: "Enterprise" },
                                    { href: "https://openai.com/chatgpt/education/", text: "Education" },
                                    { href: "https://openai.com/chatgpt/pricing/", text: "Pricing" },
                                    { href: "https://openai.com/chatgpt/download/", text: "Download" }
                                ]}
                            />
                            <FooterElement
                                title="Sora"
                                links={[
                                    { href: "https://openai.com/sora/", text: "Sora Overview" },
                                    { href: "https://openai.com/sora/#features", text: "Features" },
                                    { href: "https://openai.com/sora/#pricing", text: "Pricing" },
                                    {
                                        href: "https://help.openai.com/en/articles/9957612-generating-videos-on-sora",
                                        text: (
                                            <>
                                                Help Center
                                                <svg
                                                    width="11"
                                                    height="12"
                                                    style={{ transform: "translate(1px, -1px)" }}
                                                    viewBox="0 0 11 12"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M1.70985 4.5H7.7804M7.7804 4.5V10.5705M7.7804 4.5L0.780396 11.5"
                                                        stroke="currentColor"
                                                        strokeWidth="1.3"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </>
                                        ),
                                        target: "_blank"
                                    },
                                    {
                                        href: "https://sora.com/",
                                        text: (
                                            <>
                                                Sora login
                                                <svg
                                                    width="11"
                                                    height="12"
                                                    style={{ transform: "translate(1px, -1px)" }}
                                                    viewBox="0 0 11 12"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M1.70985 4.5H7.7804M7.7804 4.5V10.5705M7.7804 4.5L0.780396 11.5"
                                                        stroke="currentColor"
                                                        strokeWidth="1.3"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </>
                                        ),
                                        target: "_blank"
                                    }
                                ]}
                            />

                            <FooterElement
                                title="API"
                                links={[
                                    { href: "https://openai.com/api/", text: "Platform" },
                                    { href: "https://openai.com/api/pricing/", text: "Pricing" },
                                    {
                                        href: "https://platform.openai.com/docs/overview",
                                        text: (
                                            <>
                                                API login
                                                <svg
                                                    width="11"
                                                    height="12"
                                                    style={{ transform: "translate(1px, -1px)" }}
                                                    viewBox="0 0 11 12"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M1.70985 4.5H7.7804M7.7804 4.5V10.5705M7.7804 4.5L0.780396 11.5"
                                                        stroke="currentColor"
                                                        strokeWidth="1.3"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </>
                                        ),
                                        target: "_blank"
                                    },
                                    {
                                        href: "https://platform.openai.com/docs/concepts",
                                        text: (
                                            <>
                                                Documentation
                                                <svg
                                                    width="11"
                                                    height="12"
                                                    style={{ transform: "translate(1px, -1px)" }}
                                                    viewBox="0 0 11 12"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M1.70985 4.5H7.7804M7.7804 4.5V10.5705M7.7804 4.5L0.780396 11.5"
                                                        stroke="currentColor"
                                                        strokeWidth="1.3"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </>
                                        ),
                                        target: "_blank"
                                    },
                                    {
                                        href: "https://community.openai.com/",
                                        text: (
                                            <>
                                                Developer Forum
                                                <svg
                                                    width="11"
                                                    height="12"
                                                    style={{ transform: "translate(1px, -1px)" }}
                                                    viewBox="0 0 11 12"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M1.70985 4.5H7.7804M7.7804 4.5V10.5705M7.7804 4.5L0.780396 11.5"
                                                        stroke="currentColor"
                                                        strokeWidth="1.3"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </>
                                        ),
                                        target: "_blank"
                                    }
                                ]}
                            />
                        </div>
                        {/* 세번째 열 */}
                        <div className={styles.footer_column}>
                            <FooterElement
                                title="For Business"
                                links={[
                                    { href: "https://openai.com/business/", text: "Overview" },
                                ]}
                            />
                            <FooterElement
                                title="Company"
                                links={[
                                    { href: "https://openai.com/about/", text: "About us" },
                                    { href: "https://openai.com/charter/", text: "Our Charter" },
                                    { href: "https://openai.com/careers/", text: "Careers" },
                                    { href: "https://openai.com/brand/", text: "Brand" }
                                ]}
                            />
                            <FooterElement
                                title="More"
                                links={[
                                    { href: "https://openai.com/news/", text: "News" },
                                    { href: "https://openai.com/stories/", text: "Stories" }
                                ]}
                            />
                        </div>
                        {/* 네번째 열 */}
                        <div className={styles.footer_column}>
                            <FooterElement
                                title="Terms & Policies"
                                links={[
                                    { href: "https://openai.com/policies/terms-of-use/", text: "Terms of Use" },
                                    { href: "https://openai.com/policies/privacy-policy/", text: "Privacy Policy" },
                                    { href: "https://openai.com/security-and-privacy/", text: "Security" },
                                    { href: "https://openai.com/policies/", text: "Other Policies" }
                                ]}
                            />
                        </div>
                    </div>
                    <div className={styles.footer_bottom}>
                        <div className={styles.footer_sns}>
                            <a className={styles.sns_element} href="https://x.com/OpenAI" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" viewBox="0 0 17 17" fill="none"><g clip-path="url(#a)"><path fill="currentColor"></path></g></svg>
                            </a>
                            <a className={styles.sns_element} href="https://www.youtube.com/OpenAI" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" viewBox="0 0 17 17" fill="none"><g clip-path="url(#a)"><path fill="currentColor" d="M16.79 5.475s-.156-1.067-.637-1.536c-.61-.617-1.29-.62-1.603-.656-2.238-.158-5.597-.158-5.597-.158h-.006s-3.36 0-5.597.158c-.313.036-.994.039-1.603.656-.481.469-.635 1.536-.635 1.536S.95 6.73.95 7.982v1.174c0 1.252.16 2.507.16 2.507s.156 1.067.634 1.536c.61.617 1.41.596 1.765.662 1.282.118 5.441.154 5.441.154s3.363-.006 5.6-.16c.313-.036.994-.04 1.603-.656.481-.469.638-1.536.638-1.536s.159-1.252.159-2.507V7.982c0-1.252-.16-2.507-.16-2.507ZM7.298 10.58V6.228l4.322 2.184-4.322 2.168Z"></path></g></svg>
                            </a>
                            <a className={styles.sns_element} href="https://www.linkedin.com/company/openai" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" viewBox="0 0 17 17" fill="none"><g clip-path="url(#a)"><path fill="currentColor" d="M15.776.83H2.14C1.488.83.96 1.329.96 1.946v13.249c0 .617.528 1.119 1.181 1.119h13.635c.653 0 1.184-.502 1.184-1.116V1.946c0-.617-.531-1.116-1.184-1.116ZM5.706 14.025H3.333V6.633h2.375v7.392ZM4.52 5.626c-.762 0-1.378-.595-1.378-1.33 0-.735.616-1.33 1.378-1.33.76 0 1.375.595 1.375 1.33 0 .732-.615 1.33-1.375 1.33Zm10.075 8.399h-2.371v-3.593c0-.856-.016-1.96-1.235-1.96-1.234 0-1.422.935-1.422 1.9v3.653H7.197V6.633h2.275v1.01h.032c.315-.58 1.09-1.194 2.244-1.194 2.403 0 2.846 1.53 2.846 3.52v4.056Z"></path></g></svg>
                            </a>
                            <a className={styles.sns_element} href="https://github.com/openai" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" viewBox="0 0 17 17" fill="none"><g clip-path="url(#a)"><path fill="currentColor" fill-rule="evenodd" d="M8.977.83C4.549.83.97 4.32.97 8.636c0 3.45 2.293 6.371 5.475 7.405.397.078.543-.168.543-.375 0-.18-.013-.8-.013-1.447-2.227.465-2.691-.93-2.691-.93-.358-.905-.888-1.138-.888-1.138-.73-.478.053-.478.053-.478.808.052 1.233.801 1.233.801.715 1.19 1.869.853 2.333.646.066-.504.278-.853.504-1.046-1.777-.181-3.646-.853-3.646-3.852 0-.853.318-1.55.822-2.093-.08-.194-.358-.995.08-2.068 0 0 .676-.207 2.2.801a7.94 7.94 0 0 1 2.002-.258c.676 0 1.365.09 2.001.258 1.525-1.008 2.2-.801 2.2-.801.438 1.073.16 1.874.08 2.068.517.542.822 1.24.822 2.093 0 2.999-1.869 3.658-3.659 3.852.292.245.544.71.544 1.447 0 1.047-.013 1.887-.013 2.145 0 .207.146.453.543.375 3.182-1.034 5.475-3.955 5.475-7.405C16.983 4.319 13.39.83 8.977.83Z" clip-rule="evenodd"></path></g></svg>
                            </a>
                            <a className={styles.sns_element} href="https://www.instagram.com/openai/?hl=en" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 16 17" fill="none"><g fill="currentColor" clip-path="url(#a)"><path d="M7.99 2.27c2.137 0 2.39.01 3.231.048.781.034 1.203.165 1.485.275.372.143.64.318.918.596.282.282.454.547.597.92.11.28.24.705.275 1.484.038.843.047 1.096.047 3.23 0 2.138-.01 2.391-.047 3.232-.034.781-.165 1.203-.275 1.484-.143.372-.319.641-.597.92a2.46 2.46 0 0 1-.918.596c-.282.11-.707.24-1.485.275-.844.037-1.097.047-3.231.047-2.137 0-2.39-.01-3.231-.047-.781-.034-1.203-.166-1.485-.275a2.472 2.472 0 0 1-.918-.597 2.46 2.46 0 0 1-.597-.919c-.11-.28-.24-.706-.275-1.484-.038-.844-.047-1.097-.047-3.231 0-2.138.01-2.39.047-3.231.034-.782.165-1.204.275-1.485.144-.372.319-.64.597-.919a2.46 2.46 0 0 1 .918-.596c.282-.11.707-.241 1.485-.275.84-.038 1.094-.047 3.231-.047Zm0-1.44c-2.172 0-2.444.01-3.297.047-.85.037-1.434.175-1.94.372a3.905 3.905 0 0 0-1.42.925A3.92 3.92 0 0 0 .41 3.589C.212 4.1.074 4.68.037 5.53c-.038.856-.047 1.128-.047 3.3 0 2.172.01 2.444.047 3.297.037.85.175 1.434.372 1.94.206.529.478.976.925 1.42.444.443.89.718 1.415.921.51.197 1.091.334 1.941.372.853.037 1.125.047 3.297.047s2.444-.01 3.297-.047c.85-.038 1.434-.175 1.94-.372a3.91 3.91 0 0 0 1.416-.922 3.91 3.91 0 0 0 .922-1.415c.197-.51.334-1.091.372-1.941.037-.853.047-1.125.047-3.297s-.01-2.444-.047-3.297c-.038-.85-.175-1.434-.372-1.94a3.748 3.748 0 0 0-.916-1.422 3.911 3.911 0 0 0-1.415-.922C12.72 1.055 12.14.918 11.29.88c-.856-.04-1.128-.05-3.3-.05Z"></path><path d="M7.99 4.72a4.11 4.11 0 0 0 0 8.22 4.11 4.11 0 0 0 0-8.22Zm0 6.776a2.666 2.666 0 1 1 0-5.332 2.666 2.666 0 0 1 0 5.332ZM13.221 4.558a.96.96 0 1 1-1.919 0 .96.96 0 0 1 1.92 0Z"></path></g></svg>
                            </a>
                            <a className={styles.sns_element} href="https://www.tiktok.com/@openai?lang=en" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 16 17" fill="none"><g clip-path="url(#a)"><path fill="currentColor" d="M11.382.83H8.685v10.899c0 1.298-1.037 2.365-2.327 2.365-1.291 0-2.328-1.067-2.328-2.365 0-1.276 1.014-2.32 2.258-2.366V6.627c-2.742.046-4.955 2.296-4.955 5.102 0 2.829 2.259 5.101 5.048 5.101 2.788 0 5.047-2.296 5.047-5.101V6.14A6.244 6.244 0 0 0 15 7.346V4.61c-2.028-.07-3.618-1.74-3.618-3.78Z"></path></g></svg>
                            </a>
                            <a className={styles.sns_element} href="https://www.instagram.com/openai/?hl=en" target="_blank">
                                <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" width="17"><path d="M14.9006 4.06779C13.7837 3.56177 12.6046 3.20279 11.3934 3C11.2277 3.2932 11.0777 3.59486 10.9441 3.90372C9.65398 3.71134 8.34198 3.71134 7.05182 3.90372C6.91819 3.59489 6.76822 3.29323 6.60255 3C5.39058 3.2045 4.21068 3.56434 3.09264 4.07044C0.87304 7.32013 0.271342 10.4891 0.572191 13.6131C1.87204 14.5635 3.32695 15.2862 4.87367 15.75C5.22194 15.2865 5.53012 14.7947 5.79494 14.28C5.29196 14.0941 4.8065 13.8647 4.34417 13.5946C4.46585 13.5072 4.58485 13.4173 4.69985 13.3299C6.04511 13.956 7.51339 14.2806 8.99999 14.2806C10.4866 14.2806 11.9549 13.956 13.3001 13.3299C13.4165 13.4239 13.5355 13.5139 13.6558 13.5946C13.1926 13.8652 12.7062 14.0949 12.2024 14.2813C12.4668 14.7958 12.775 15.2871 13.1236 15.75C14.6717 15.2881 16.1277 14.5657 17.4278 13.6144C17.7808 9.99159 16.8247 6.85173 14.9006 4.06779ZM6.17601 11.6919C5.33765 11.6919 4.64502 10.939 4.64502 10.0128C4.64502 9.08655 5.31358 8.32705 6.17334 8.32705C7.0331 8.32705 7.72037 9.08655 7.70567 10.0128C7.69096 10.939 7.03043 11.6919 6.17601 11.6919ZM11.824 11.6919C10.9843 11.6919 10.2943 10.939 10.2943 10.0128C10.2943 9.08655 10.9629 8.32705 11.824 8.32705C12.6851 8.32705 13.367 9.08655 13.3523 10.0128C13.3376 10.939 12.6784 11.6919 11.824 11.6919Z" fill="currentColor"></path></svg>
                            </a>
                        </div>

                        <div className={styles.footer_date}>
                            OpenAI © 2015–2025
                        </div>

                        <button className={styles.round_button}>
                            <span className={styles.round_text}>English
                                <span className={styles.us}>United States</span>
                            </span>
                        </button>
                    </div>

                </div>
            </div>
        </div >
    );
}

