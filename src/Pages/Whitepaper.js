import Header from "../components/Header";
import { useState } from "react";

const faqs = [
  {
    title: "Introduction",
    text: (
      <p>
        In today's digital age, the dissemination of information has taken on an
        unprecedented pace. The internet, with its vast array of social media
        platforms and online news outlets, has transformed the way we access and
        share news. However, this remarkable change has also given rise to a
        growing concern – the proliferation of fake news. The spread of fake
        news, whether intentionally misleading or due to misunderstanding, has
        found fertile ground in the digital age. With the 2016 U.S. presidential
        election as a stark reminder of the impact false information can have,
        we now find `ourselves grappling with a complex issue that affects our
        society, politics, and daily lives. <br></br> <br></br> The prevalence
        of fake news is a pressing concern in the contemporary landscape. Online
        social media platforms have democratized information sharing, enabling
        anyone to create and disseminate news-like content with ease. While this
        democratization of information can be empowering, it also raises the
        specter of misinformation. A study by Zhang (2020) highlighted that fake
        news can erode trust in authorities, experts, and governments, affecting
        public perception and decision-making. <br></br> <br></br> Lazer et al.
        (2018) pointed out that the digital age has exposed vulnerabilities to
        manipulation, and the rise of fake news challenges traditional defenses
        against misinformation. Misleading information, propaganda, and
        disinformation have existed for centuries, but the internet and social
        media have amplified their reach and impact (Posetti & Matthews, n.d.).{" "}
        <br></br> <br></br>
        The scale of the issue is substantial. A survey by Figueira and Oliveira
        (2017) emphasizes that misinformation on social networks can have
        real-world impacts within minutes, affecting millions of users. Kalsnes
        (2018) underlines the evolution of fake news with the development of
        communication technologies, while Gelfert (2019) offers a definition of
        'fake news' that characterizes it as deliberately misleading information
        presented as news.
      </p>
    ),
  },
  {
    title: "Why capCheck?",
    text: (
      <p>
        To combat this challenge, innovative solutions have emerged. One such
        solution is capCheck, an Information Fact-Check Web Tool. CapCheck
        utilizes AI-driven algorithms to assess the reliability of input data,
        providing clear labels such as ' No Cap', meaning True or 'Cap', meaning
        False to indicate the information's veracity. This tool is designed to
        empower users to verify the accuracy of the information they encounter
        online. <br></br> <br></br> The capCheck system employs a robust process
        to assess the reliability of information. It uses imported libraries
        such as pandas, re, NLTK, and scikit-learn for data processing and
        analysis. The system cleanses and preprocesses input data by removing
        non-alphabetic characters, converting text to lowercase, and extracting
        key information. Feature extraction is performed using TF-IDF to
        quantify the importance of words in the input. Logistic regression
        modeling is then utilized to evaluate the input's reliability, and the
        dataset is divided into training and testing sets to assess the system's
        performance (Zhou & Zafarani, 2020). <br></br> <br></br> As we grapple
        with the pervasive issue of fake news, tools like capCheck represent a
        significant step forward in the fight against misinformation. In a world
        where information is shared at a breakneck pace, the ability to verify
        its accuracy is paramount. CapCheck's AI-driven algorithms and rigorous
        process offer users a reliable means to determine the truthfulness of
        the information they encounter, enabling them to make more informed
        decisions and contribute to a more accurate and trustworthy digital
        landscape.
      </p>
    ),
  },
  {
    title: "Mission:",
    text: (
      <p>
        capCheck’s mission is to foster a more informed online community by
        providing users with a robust Online Information Fact-Check Web Tool. We
        understand the importance of ensuring the accuracy of the information
        circulating on the internet, and we are dedicated to equipping users
        with the tools they need to make well-informed decisions.
      </p>
    ),
  },
  {
    title: "Key Features:",
    text: (
      <p>
        - User Input: Input information for verification is accepted from users
        in the form of text. <br></br>
        <br></br> - Text Analysis and Classification: Efficient processing
        includes importation, preprocessing, and TF-IDF. Logistic Regression,
        trained on split data, ensures accurate predictions, with key metrics
        for performance evaluation.<br></br>
        <br></br> - Fact-Checking Algorithm Integration: The user input
        undergoes processing through a fact-checking algorithm,
        cross-referencing information with reliable websites and databases. This
        ensures the system's capacity to validate and verify input data for
        accuracy and reliability.<br></br>
        <br></br> - Result Classification: User input results in either a "Cap"
        label for accurate information or a "Not Cap" label for inaccurate
        information.<br></br>
        <br></br> - Interpretation Generation: The system produces
        interpretations based on user input, enhancing the system's capacity to
        derive meaningful insights and information from the provided input.
        <br></br>
        <br></br>- Source Verification Links: The system offers verified source
        links that either confirm or debunk user input, enhancing transparency
        and credibility by providing users with access to the supporting or
        refuting information.
      </p>
    ),
  },
  {
    title: "System Model:",
    text: (
      <div>
        <p>
          The system model starts with the user input, where the user provides
          information for fact-checking. This input undergoes a series of
          processes using imported libraries, including pandas, re, NLTK, and
          scikit-learn. The system cleanses and preprocesses the input by
          removing non-alphabetic characters, converting the text to lowercase,
          and extracting key information. To assess the reliability of the
          input, the system quantifies the importance of words in the text using
          TF-IDF and employs logistic regression modeling (LRM). The output is a
          clear label, either 'Cap,' indicating True information, or 'Not Cap,'
          indicating False information. Additionally, the system generates an
          interpretation based on the input data and result, providing verified
          source links to either confirm or debunk the input data, offering
          users a trustworthy means to verify information in the digital realm.
        </p>
        <img
          className="ipo-img"
          src="whitepaper-img/IPO.png"
          alt="IPO-img"
        ></img>
      </div>
    ),
  },
  {
    title: "System Process:",
    text: (
      <p>
        · Step 1: Importing Libraries <br></br>
        <br></br> The system begins by importing essential libraries necessary
        for the "capCheck" process. These libraries, includes; pandas for data
        handling, re for regular expressions, NLTK for text processing tasks,
        and scikit-learn for machine learning functionalities.<br></br>
        <br></br> · Step 2: Text Data Preprocessing<br></br>
        <br></br> This step involves the system cleansing text data to optimize
        the model's performance. It encompasses removing non-alphabetic
        characters, converting text to lowercase, word tokenization, eliminating
        common stop words, and applying stemming to reduce words to their root
        form. This ensures that the text data is in an ideal format for
        analysis.<br></br>
        <br></br> · Step 3: Feature Extraction with TF-IDF The system transforms
        the preprocessed text data into a numerical format compatible with
        machine learning models. This transformation is achieved using TF-IDF
        (Term Frequency-Inverse Document Frequency) vectorization, quantifying
        the importance of words in the documents.<br></br>
        <br></br> · Step 4: Data Splitting for Training and Testing<br></br>
        <br></br> To evaluate the "capCheck" system's performance, the dataset
        is divided into a training set and a testing set. The training set is
        used to train the model, while the testing set is used to evaluate its
        performance. This ensures that the system can be tested on unseen data
        to assess its ability to generalize.<br></br>
        <br></br> · Step 5: Logistic Regression Modeling<br></br>
        <br></br> The system initializes and trains a Logistic Regression model,
        chosen as the classification algorithm. This model learns the
        relationships between the features (TF-IDF values) and the target labels
        during training. It is trained to make predictions based on the provided
        text data.<br></br>
        <br></br> · Step 6: Prediction and Performance Evaluation<br></br>
        <br></br> After training, the system applies the trained Logistic
        Regression model to make predictions on the test set. These predictions
        are then compared to the actual labels in the test set to measure the
        model's accuracy. The accuracy score reflects the proportion of
        correctly classified instances, serving as a performance metric for the
        system's classification capabilities.
      </p>
    ),
  },
  {
    title: "Limitations:",
    text: (
      <p>
        · The tool may not be able to accurately assess facts when the
        information is not yet complete in real-time, as certain details may
        change or become available over time.<br></br>
        <br></br> · The tool may consider information as factual based on its
        currency and widespread acceptance. This means that facts may change
        over time as new information becomes available, and it might not capture
        emerging facts that are not widely recognized yet.<br></br>
        <br></br> · The tool's fact-checking accuracy is contingent on the
        reliability of reference sources. If accurate information is only
        available at a website or database that is not considered reliable, the
        tool may not be able to consider that as factual information.
      </p>
    ),
  },
  {
    title: "References",
    text: (
      <p>
        Zhang, X. (2020). An overview of online fake news: Characterization,
        detection, and discussion. Information Processing & Management, 57(2).
        https://www.sciencedirect.com/science/article/abs/pii/S0306457318306794
        <br></br>
        <br></br>
        Lazer, D. M. et al. (2018). The science of fake news: Addressing fake
        news requires a multidisciplinary effort. Science, 359(6380), 1094-1096.
        https://www.science.org/doi/abs/10.1126/science.aao2998<br></br>
        <br></br>
        Gelfert, A. (2019). Fake News: A Definition. Informal Logic, 38(1),
        84-117.
        https://www.erudit.org/en/journals/informallogic/2018-v38-n1-informallogic04379/1057034ar/abstract/
        <br></br>
        <br></br>
        Figueira, Á., & Oliveira, L. (2017). The current state of fake news:
        Challenges and opportunities. Procedia Computer Science, 121, 817-825.
        https://www.sciencedirect.com/science/article/pii/S1877050917323086
        <br></br>
        <br></br>
        Zhou, X., & Zafarani, R. (2020). A Survey of Fake News: Fundamental
        Theories, Detection Methods, and Opportunities. ACM Computing Surveys,
        53(5), Article 109, 1-40. https://dl.acm.org/doi/abs/10.1145/3395046
      </p>
    ),
  },
];

export default function Whitepaper() {
  return (
    <div>
      <Header />
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div>
      <p className="whitepaper-title">Whitepaper</p>
      <div className="accordion">
        {data.map((el, i) => (
          <AccordionItem
            title={el.title}
            text={el.text}
            num={i}
            key={el.title}
          />
        ))}
      </div>
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}

