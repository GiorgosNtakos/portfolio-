export const translations = {
    en: {
      home: "Home",
      about: "About",
      resume: "Resume",
      work: "Work",
      timeline: "Timeline",
      contact: "Contact",
      langToggle: "EN / GR",
      homeQuote: "“The beginning is half of the whole.”",
      viewResume: "View Resume",
      typewriter: [
        "Computer Engineer specialized in Hardware Design ",
        "Passionate about Digital Systems and Embedded Architectures ",
        "Focused on Clean, Efficient, and Scalable Hardware Solutions ",
        "Driven by Design Precision and Logical Structure ",
        "Exploring RTL, SoC Design, and Embedded Development "
      ],
      aboutSection: {
        title: "About Me",
        nameIntro: "My name is Georgios Ntakos, and I recently completed my Integrated Master’s degree in Computer Engineering from the Computer Engineering and Informatics Department (CEID) of the University of Patras, graduating in 2024.",
        motivation: "I’m a motivated and detail-driven Computer Engineer, passionate about digital systems, embedded design, and problem solving. Even at the beginning of my career, I strive to build efficient, reliable, and meaningful solutions.",
        studies: "During my studies, I developed a strong foundation in hardware description languages, software engineering, and EDA tools. I particularly enjoy working at the intersection of hardware and software — combining logic, structure, and creativity in every project.",
        goal: "I'm eager to contribute to real-world challenges, collaborate in dynamic teams, and continue evolving as a developer and engineer.",
        info: {
          birthday: "Birthday",
          degree: "Degree",
          city: "City",
          email: "Email",
          age: "Age",
          availability: "Availability"
        },
        labels: {
          birthday: "Mar. 1999",
          degree: "Integrated Master",
          city: "Athens, Greece",
          availability: "Open to work"
        },
        skillsTitle: "Skills"
      },
      resume: "Resume",
      resumeIntro: "For a complete overview of my academic background, practical experience, and technical expertise, you can download my full CV in PDF format below.",
      projectsTitle: "Projects & Work Experience",
      workTab: "Work Experience",
      projectsTab: "Projects",
      conferencesTab: "Conferences & Events",
      readMore: "Read more",
      readLess: "Read less",
      workExperience: [
        {
          "company": "Think Silicon (Applied Materials)",
          "title": "Hardware Designer Internship",
          "duration": "Mar. 2023 – Jun. 2023",
          "description": "I collaborated on floating-point Soft-IP modules in SystemVerilog, focusing on RTL verification with Synopsys tools.\nI automated synthesis flows using TCL scripting and coordinated with the Thessaloniki team and Synopsys representatives.\nI participated in design sync meetings, contributed to company-wide discussions, and proposed architectural enhancements."
        },
        {
          "company": "University of Patras",
          "title": "Assistant Lab Volunteer",
          "duration": "Oct. 2020 – Jun. 2022",
          "description": "Supported the Basic and Digital Electronics Lab by assisting with lab sessions, supervising trainees, and maintaining lab equipment.\nI conducted circuit implementation and experimentation, analyzed data, and contributed to team collaboration and continuous improvement."
        }
      ],
      conferences: [
        {
          "title": "MOCAST 2025 – Dresden, Germany",
          "role": "Conference Paper Presentation (Accepted)",
          "date": "11–13 June 2025",
          "description": "Our paper, <em> Optimizing Lightweight Cryptographic Schemes for Enhanced Security in RFID and Wireless Sensor Networks</em>, was accepted for an oral presentation at MOCAST 2025 at TU Dresden.\n The paper proposes FPGA-optimized, pipelined architectures of the Hummingbird-2 cipher.\nThese architectures target high efficiency and security. Although I could not attend due to military service, I contributed to the full hardware implementation, and conducted benchmarking on Artix-7 FPGAs."
        },
        {
          "title": "Atoms to Algos II – Athens",
          "role": "Industry Event Participation",
          "date": "8 June 2023",
          "description": "I attended an event on AI-driven chip innovation hosted by Think Silicon and Applied Materials.\n I gained insights from NVIDIA, Qualcomm, and other industry leaders on topics such as low-power GPU design, AI hardware pipelines, and semiconductor manufacturing under global constraints.\nI also networked with experts in AI and embedded systems."
        }
      ],
      projectsList: [
        {
          title: "Diploma Thesis: Hummingbird-2 on FPGA",
          tech: ["VHDL", "ModelSim", "Vivado", "FPGA"], 
          description: `An embedded cryptographic module was developed that implements the Hummingbird-2 algorithm and targets low-resource environments, such as RFID and wireless sensors. The maximum frequency achieved on the Artix-7 FPGA was 244 MHz while optimizing for area and power.`,
          extended: `The project involved simulation, synthesis, and gate-level hardware implementation using ModelSim and Vivado. Architectural enhancements such as pipelining and parallelization were explored, resulting in significant throughput gains. A complete authenticated encryption system with verified correctness and efficient area/power trade-offs was delivered. A comparison against lightweight ciphers in the literature showed competitive performance.`
        },
        {
          title: "MySynth: Music Note Synthesizer with VGA Output",
          tech: ["Verilog", "ModelSim", "Xilnix ISE", "FPGA"],
          description: `A digital music synthesizer system was developed on an FPGA that enables users to play musical notes using a PS/2 keyboard.
  The system visualizes the notes in real time on a VGA monitor as white notes on a pentagram.
  I designed three core modules: a keyboard decoder, a VGA controller, and a sound generator that uses pulse width modulation (PWM) for buzzer playback.`,
          extended: `I configured VGA sync signals (HSYNC and VSYNC) for a resolution of 640×400 @70 Hz with a pixel clock of 25 MHz.
  I handled ESC key input to reset both the video and audio outputs on the fly.
  I implemented FSM-based real-time rendering logic and an audio output pipeline.
  I focused on efficient resource usage and timing accuracy to achieve smooth VGA rendering and glitch-free sound.`
        },
        {
          title: "Post-Quantum Digital Signature Architecture",
          tech: ["VHDL", "ModelSim", "Vivado", "FPGA"],
          description: `I developed a digital signature architecture based on the Hidden Discrete Logarithm Problem (HDLP) to target post-quantum cryptographic resilience.
  The algorithm was designed and implemented using VHDL, and its functionality was simulated in ModelSim. Full synthesis and hardware compatibility were verified in Vivado.`,
          extended: `The scheme employed a four-dimensional, non-commutative, associative algebra (FNAA) to enhance resistance against quantum adversaries.
  The focus was on criteria such as 2-dimensional cyclicity and masking operations to prevent periodicity analysis during key recovery.
  The performance characteristics and security level were then compared against NIST PQC standards.
  The aim was to achieve a lightweight implementation with a reduced key size and improved verification performance compared to traditional schemes.`
        },
        {
          title: "HUD System for Tire Pressure & Temperature Monitoring",
          tech: ["Embedded C"],
          description: `We built an embedded head-up display (HUD) system that monitors tire pressure and temperature in real time.
  I integrated sensors for data acquisition and designed firmware for wireless Bluetooth transmission and LED visual output.`,
          extended: ` The system employed interrupt-driven analog-to-digital converter (ADC) sampling and a custom sensor calibration algorithm.
  The microcontroller wirelessly received the data and displayed live values on an LED display positioned in the driver’s line of sight.
  With portability and safety in mind, the project was designed for use with cars.
  The firmware was written in embedded C and optimized for responsiveness and low power consumption.`
        }
      ],
      timelineEvents: [
        {
          year: "Nov. 2024 – Aug. 2025",
          title: "Military Service – Air Defense Artillery",
          description: "I served in the Greek Army at an anti-aircraft unit in Samos, fulfilling my national service with commitment.",
          side: "left"
        },
        {
          year: "11 Jun. 2025 - 13 Jun. 2025",
          title: "Paper Accepted at MOCAST 2025",
          description: "I co-authored a paper on secure FPGA-based lightweight cryptography, accepted for oral presentation at MOCAST 2025. I couldn't attend due to military service.",
          side: "right"
        },
        {
          year: "Dec. 2024",
          title: "Graduated from CEID",
          description: "I completed my Integrated Master’s degree in Computer Engineering at the University of Patras.",
          side: "left"
        },
        {
          year: "8 Jun. 2023",
          title: "Atoms to Algos II – Athens",
          description: "I attended a high-level semiconductor and AI conference with experts from NVIDIA and Qualcomm, exploring innovations in low-power GPUs and AI hardware.",
          side: "right"
        },
        {
          year: "Mar. 2023 - Jun. 2023",
          title: "Internship at Think Silicon",
          description: "I worked on Soft-IP floating-point design using SystemVerilog and Synopsys tools.",
          side: "left"
        },
        {
          year: "Dec. 2022 - Oct. 2024",
          title: "Diploma Thesis: Hummingbird-2 on FPGA",
          description: "I developed a lightweight authenticated encryption core optimized for hardware efficiency.",
          side: "right"
        },
        {
          year: "Oct. 2020 – Jun. 2022",
          title: "Assistant at Basic and Digital Electronics Lab",
          description: "I supervised students and maintained equipment, ensuring the lab ran smoothly.",
          side: "left"
        }
      ],
      contactSection: {
        title: "Contact Me",
        namePlaceholder: "Your name",
        emailPlaceholder: "Your email",
        messagePlaceholder: "Your message",
        sendButton: "Send",
        tooltipEmail: "Send Email",
        tooltipGitHub: "View GitHub",
        tooltipLinkedIn: "View LinkedIn"
      }
    },
    gr: {
      home: "Αρχική",
      about: "Σχετικά",
      resume: "Βιογραφικό",
      work: "Έργα",
      timeline: "Χρονολόγιο",
      contact: "Επικοινωνία",
      langToggle: "GR / EN",
      homeQuote: "«Αρχή ήμισυ παντός.»",
      viewResume: "Προβολή Βιογραφικού",
      typewriter: [
        "Μηχανικός Υπολογιστών με εξειδίκευση στον Σχεδιασμό Υλικού ",
        "Παθιασμένος για τα Ψηφιακά Συστήματα και τις Ενσωματωμένες Αρχιτεκτονικές ",
        "Επικεντρωμένος σε Καθαρές, Αποδοτικές & Επεκτάσιμες Λύσεις Υλικού ",
        "Με κίνητρο την Ακρίβεια Σχεδίασης και τη Λογική Δομή ",
        "Ασχολούμαι με RTL, Σχεδίαση SoC και Ενσωματωμένη Ανάπτυξη "
      ],
      aboutSection: {
        title: "Σχετικά με Εμένα",
        nameIntro: "Ονομάζομαι Γεώργιος Ντάκος και πρόσφατα ολοκλήρωσα το πτυχίο Ενιαίου και Αδιάσπαστου Μεταπτυχιακού Προγράμματος (Integrated Master) στη Μηχανική Ηλεκτρονικών Υπολογιστών, από το Τμήμα Μηχανικών Η/Υ & Πληροφορικής του Πανεπιστημίου Πατρών (2024).",
        motivation: "Είμαι ένας παρακινημένος και λεπτομερής Μηχανικός Υπολογιστών, με πάθος για τα ψηφιακά συστήματα, τον ενσωματωμένο σχεδιασμό και την επίλυση προβλημάτων.",
        studies: "Κατά τη διάρκεια των σπουδών μου ανέπτυξα γερά θεμέλια στις γλώσσες περιγραφής υλικού, τη μηχανική λογισμικού και τα εργαλεία σχεδίασης κυκλωμάτων.",
        goal: "Ανυπομονώ να συνεισφέρω σε πραγματικές προκλήσεις, να συνεργαστώ σε δυναμικές ομάδες και να εξελιχθώ συνεχώς ως μηχανικός και σχεδιαστής ανάπτυξης υλικού.",
        info: {
          birthday: "Ημερομηνία γέννησης",
          degree: "Τίτλος σπουδών",
          city: "Πόλη",
          email: "Email",
          age: "Ηλικία",
          availability: "Διαθεσιμότητα"
        },
        labels: {
          birthday: "Μαρ. 1999",
          degree: "Ενιαίο Πτυχίο / Master",
          city: "Αθήνα, Ελλάδα",
          availability: "Διαθέσιμος για εργασία"
        },
        skillsTitle: "Δεξιότητες"
      },
      resume: "Βιογραφικό",
      resumeIntro: "Για πλήρη εικόνα του ακαδημαϊκού μου υπόβαθρου, της πρακτικής εμπειρίας και των τεχνικών δεξιοτήτων μου, μπορείτε να κατεβάσετε το αναλυτικό μου βιογραφικό σε μορφή PDF παρακάτω.",
      projectsTitle: "Έργα και Εργασιακή Εμπειρία",
      workTab: "Επαγγελματική Εμπειρία",
      projectsTab: "Έργα",
      conferencesTab: "Συνέδρια & Εκδηλώσεις",
      readMore: "Περισσότερα",
      readLess: "Λιγότερα",
      workExperience: [
        {
          company: "Think Silicon (Applied Materials)",
          title: "Πρακτική Άσκηση ως Σχεδιαστής Υλικού",
          duration: "Μαρ. 2023 – Ιούν. 2023",
          description: `Συνεργάστηκα στην ανάπτυξη Soft-IP μονάδων κινητής υποδιαστολής (floating-point units) σε SystemVerilog, εστιάζοντας στην επαλήθευση RTL με εργαλεία της Synopsys.
  Αυτοματοποίησα τις ροές σύνθεσης χρησιμοποιώντας TCL scripting και συντονίστηκα με την ομάδα της Θεσσαλονίκης και τους εκπροσώπους της Synopsys.
  Συμμετείχα σε συσκέψεις σχεδιασμού, συνέβαλα σε συζητήσεις σε επίπεδο εταιρείας και πρότεινα αρχιτεκτονικές βελτιώσεις.`
        },
        {
          company: "Πανεπιστήμιο Πατρών",
          title: "Εθελοντής Βοηθός Εργαστηρίου",
          duration: "Οκτ. 2020 – Ιούν. 2022",
          description: `Υποστήριξα το Εργαστήριο Βασικών και Ψηφιακών Ηλεκτρονικών βοηθώντας στις εργαστηριακές συνεδρίες, επιβλέποντας τους εκπαιδευόμενους και συντηρώντας τον εργαστηριακό εξοπλισμό.
  Πραγματοποίησα υλοποίηση κυκλωμάτων και πειράματα, ανέλυσα δεδομένα και συνέβαλα στη συνεργασία της ομάδας και στη συνεχή βελτίωση.`
        }
      ],
      conferences: [
        {
          title: "MOCAST 2025 – Δρέσδη, Γερμανία",
          role: "Παρουσίαση Εργασίας σε Συνέδριο",
          date: "11–13 Ιουνίου 2025",
          description: `Η εργασία μας, <em>Optimizing Lightweight Cryptographic Schemes for Enhanced Security in RFID and Wireless Sensor Networks</em>, έγινε δεκτή για προφορική παρουσίαση στο MOCAST 2025 στο Τεχνικό Πανεπιστήμιο της Δρέσδης.
  Η εργασία προτείνει βελτιστοποιημένες αρχιτεκτονικές FPGA, με αγωγούς διοχέτευσης του κρυπτογραφήματος Hummingbird-2.
  Αυτές οι αρχιτεκτονικές στοχεύουν σε υψηλή αποδοτικότητα και ασφάλεια. Αν και δεν μπόρεσα να παρευρεθώ λόγω στρατιωτικής θητείας, συνέβαλα στην πλήρη υλοποίηση υλικού και διεξήγαγα συγκριτική αξιολόγηση σε Artix-7 FPGAs`
        },
        {
          title: "Atoms to Algos II – Αθήνα",
          role: "Συμμετοχή σε Βιομηχανική Εκδήλωση",
          date: "8 Ιουνίου 2023",
          description: `Παρακολούθησα μια εκδήλωση σχετικά με την καινοτομία στα τσιπ με γνώμονα την τεχνητή νοημοσύνη, η οποία διοργανώθηκε από την Think Silicon και την Applied Materials.
  Αποκόμισα πληροφορίες από την NVIDIA, την Qualcomm και άλλους ηγέτες του κλάδου για θέματα όπως ο σχεδιασμός GPU χαμηλής κατανάλωσης, οι αγωγοί υλικού AI και η κατασκευή ημιαγωγών υπό παγκόσμιους περιορισμούς.
  Επίσης, δικτυώθηκα με εμπειρογνώμονες στον τομέα της τεχνητής νοημοσύνης και των ενσωματωμένων συστημάτων.`
        }
      ],
      projectsList: [
        {
          title: "Διπλωματική Εργασία: Hummingbird-2 σε FPGA",
          tech: ["VHDL", "ModelSim", "Vivado", "FPGA"],
          description: `Αναπτύχθηκε μια ενσωματωμένη κρυπτογραφική μονάδα που υλοποιεί τον αλγόριθμο Hummingbird-2 και απευθύνεται σε περιβάλλοντα με χαμηλούς πόρους, όπως τα RFID και οι ασύρματοι αισθητήρες. Η μέγιστη συχνότητα που επιτεύχθηκε στο Artix-7 FPGA ήταν 244 MHz, ενώ παράλληλα βελτιστοποιήθηκε η περιοχή και η ισχύς.
  `,
          extended: `Το έργο περιελάμβανε προσομοίωση, σύνθεση και υλοποίηση υλικού σε επίπεδο πύλης με τη χρήση των ModelSim και Vivado. Διερευνήθηκαν αρχιτεκτονικές βελτιώσεις, όπως η pipelining και η παραλληλοποίηση, με αποτέλεσμα σημαντική αύξηση της απόδοσης. Παραδόθηκε ένα ολοκληρωμένο σύστημα κρυπτογράφησης με εξακριβωμένη ορθότητα και αποτελεσματικούς συμβιβασμούς περιοχής/ισχύος. Η σύγκριση με ελαφριές κρυπτογραφήσεις στη βιβλιογραφία έδειξε ανταγωνιστικές επιδόσεις.`
        },
        {
          title: "MySynth: Συνθέτης μουσικών νοτών με έξοδο VGA",
          tech: ["Verilog", "ModelSim", "Xilnix ISE", "FPGA"],
          description: `
  Ένα σύστημα ψηφιακού συνθέτη μουσικής αναπτύχθηκε σε ένα FPGA που επιτρέπει στους χρήστες να παίζουν μουσικές νότες χρησιμοποιώντας ένα πληκτρολόγιο PS/2.
  Το σύστημα απεικονίζει τις νότες σε πραγματικό χρόνο σε μια οθόνη VGA ως λευκές νότες σε ένα πεντάγραμμο.
  Σχεδίασα τρεις βασικές μονάδες: έναν αποκωδικοποιητή πληκτρολογίου, έναν ελεγκτή VGA και μια γεννήτρια ήχου που χρησιμοποιεί διαμόρφωση εύρους παλμών (PWM) για την αναπαραγωγή ήχου.
  `,
          extended: `Διαμόρφωσα τα σήματα συγχρονισμού VGA (HSYNC και VSYNC) για ανάλυση 640×400 @70 Hz με ρολόι εικονοστοιχείων 25 MHz.
  Χειρίστηκα την είσοδο του πλήκτρου ESC για την επαναφορά τόσο της εξόδου βίντεο όσο και της εξόδου ήχου εν κινήσει.
  Υλοποίησα λογική απόδοσης σε πραγματικό χρόνο βασισμένη σε FSM και αγωγό εξόδου ήχου.
  Επικεντρώθηκα στην αποδοτική χρήση πόρων και στην ακρίβεια χρονισμού για να επιτύχω ομαλή απόδοση VGA και ήχο χωρίς δυσλειτουργίες.`
        },
        {
          title: "Αρχιτεκτονική Ψηφιακής Υπογραφής Post-Quantum",
          tech: ["VHDL", "ModelSim", "Vivado", "FPGA"],
          description: `Ανέπτυξα μια αρχιτεκτονική ψηφιακής υπογραφής που βασίζεται στο πρόβλημα του κρυμμένου διακριτού λογαρίθμου (HDLP) για να στοχεύσω στην ανθεκτικότητα της μετα-κβαντικής κρυπτογραφίας.
  Ο αλγόριθμος σχεδιάστηκε και υλοποιήθηκε με τη χρήση VHDL και η λειτουργία του προσομοιώθηκε στο ModelSim. Η πλήρης σύνθεση και η συμβατότητα υλικού επαληθεύτηκαν στο Vivado.`,
          extended: `Το σχήμα χρησιμοποίησε μια τετραδιάστατη, μη αντιμεταθετική, συσχετιστική άλγεβρα (FNAA) για να ενισχύσει την ανθεκτικότητα έναντι κβαντικών αντιπάλων.
  Η έμφαση δόθηκε σε κριτήρια όπως η δισδιάστατη κυκλικότητα και οι πράξεις συγκάλυψης για την αποτροπή της ανάλυσης περιοδικότητας κατά την ανάκτηση κλειδιών.
  Στη συνέχεια συγκρίθηκαν τα χαρακτηριστικά απόδοσης και το επίπεδο ασφάλειας με τα πρότυπα NIST PQC.
  Στόχος ήταν να επιτευχθεί μια ελαφριά υλοποίηση με μειωμένο μέγεθος κλειδιού και βελτιωμένη απόδοση επαλήθευσης σε σύγκριση με τα παραδοσιακά σχήματα.`
        },
        {
          title: "HUD Σύστημα για Πίεση & Θερμοκρασία Ελαστικών",
          tech: ["Embedded C"],
          description: `Κατασκευάσαμε ένα ενσωματωμένο σύστημα head-up display (HUD) που παρακολουθεί την πίεση και τη θερμοκρασία των ελαστικών σε πραγματικό χρόνο.
  Ενσωμάτωσα αισθητήρες για την απόκτηση δεδομένων και σχεδίασα υλικολογισμικό για ασύρματη μετάδοση Bluetooth και οπτική έξοδο LED.`,
          extended: `Το σύστημα χρησιμοποίησε δειγματοληψία αναλογικού-ψηφιακού μετατροπέα (ADC) με διακοπή και έναν προσαρμοσμένο αλγόριθμο βαθμονόμησης αισθητήρων.
  Ο μικροελεγκτής λάμβανε ασύρματα τα δεδομένα και εμφάνιζε τις ζωντανές τιμές σε μια οθόνη LED τοποθετημένη στο οπτικό πεδίο του οδηγού.
  Με γνώμονα τη φορητότητα και την ασφάλεια, το έργο σχεδιάστηκε για χρήση σε αυτοκίνητα.
  Το υλικολογισμικό γράφτηκε σε ενσωματωμένη C και βελτιστοποιήθηκε για απόκριση και χαμηλή κατανάλωση ενέργειας.`
        }
      ],
      timelineEvents: [
        {
          year: "Νοε. 2024 – Αυγ. 2025",
          title: "Στρατιωτική Θητεία – Αντιαεροπορικό Πυροβολικό",
          description: "Υπηρέτησα στον Ελληνικό Στρατό σε μονάδα αντιαεροπορικού πυροβολικού στη Σάμο, εκπληρώνοντας τα εθνικά μου καθήκοντα με συνέπεια.",
          side: "left"
        },
        {
          year: "11 Ιουν. 2025 – 13 Ιουν. 2025",
          title: "Αποδοχή Εργασίας στο MOCAST 2025",
          description: "Συνέγραψα εργασία για ελαφριά κρυπτογράφηση με FPGA, η οποία έγινε δεκτή για προφορική παρουσίαση στο MOCAST 2025 (TU Dresden). Δεν μπόρεσα να παρευρεθώ λόγω στρατιωτικών υποχρεώσεων.",
          side: "right"
        },
        {
          year: "Δεκ. 2024",
          title: "Αποφοίτηση από το ΤΜΗΥΠ",
          description: "Ολοκλήρωσα το Ενιαίο Πτυχίο / Μεταπτυχιακό στη Μηχανική Υπολογιστών στο Πανεπιστήμιο Πατρών.",
          side: "left"
        },
        {
          year: "8 Ιουν. 2023",
          title: "Atoms to Algos II – Αθήνα",
          description: "Παρακολούθησα συνέδριο υψηλού επιπέδου για ημιαγωγούς και AI, με συμμετοχές από NVIDIA και Qualcomm. Εξέτασα καινοτομίες στη σχεδίαση chip και AI αρχιτεκτονικών.",
          side: "right"
        },
        {
          year: "Μαρ. 2023 – Ιουν. 2023",
          title: "Πρακτική Άσκηση στη Think Silicon",
          description: "Ασχολήθηκα με σχεδίαση Soft-IP κινητής υποδιαστολής σε SystemVerilog και εργαλεία Synopsys.",
          side: "left"
        },
        {
          year: "Δεκ. 2022 – Οκτ. 2024",
          title: "Διπλωματική: Hummingbird-2 σε FPGA",
          description: "Ανάπτυξα πυρήνα αυθεντικοποιημένης κρυπτογράφησης με βελτιστοποίηση για hardware απόδοση.",
          side: "right"
        },
        {
          year: "Οκτ. 2020 – Ιουν. 2022",
          title: "Βοηθός στο Εργαστήριο Ψηφιακών και Βασικών Ηλεκτρονικών",
          description: "Επίβλεψα φοιτητές και διατήρησα εξοπλισμό, διασφαλίζοντας την ομαλή λειτουργία του εργαστηρίου.",
          side: "left"
        }
      ],
      contactSection: {
        title: "Επικοινωνία",
        namePlaceholder: "Το όνομά σας",
        emailPlaceholder: "Το email σας",
        messagePlaceholder: "Το μήνυμά σας",
        sendButton: "Αποστολή",
        tooltipEmail: "Αποστολή Email",
        tooltipGitHub: "Προβολή GitHub",
        tooltipLinkedIn: "Προβολή LinkedIn"
      }
    },
  };