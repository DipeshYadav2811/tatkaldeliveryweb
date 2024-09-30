import React, { useEffect } from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Grid, List, ListItem, ListItemText, Container, Paper } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content:
      "Welcome to RapidRoute Logistics LLP. This Privacy Policy explains how we collect, use, and protect your information when you use our services. By accessing or using our services, you agree to the terms outlined in this Privacy Policy.",
    "description": "We collect various types of information to provide, enhance, and secure our services. This includes:",
  },
  {
    id: "info-collect",
    title: "Information We Collect",
    content:
      "We collect various types of information to provide, enhance, and secure our services. This includes Personal Information, Location Information, Account and Usage Information, Communication Data, and Uploaded Files.",
      sectionsList: [
        {
          "title": "Personal Information",
          "details": [
            "Full Name",
            "Email Address",
            "Phone Number",
            "Residential/Delivery Address",
            "Identification Documents (for account verification and compliance)",
            "Payment Details (e.g., credit/debit card information, UPI ID, or other payment methods)"
          ]
        },
        {
          "title": "Location Information",
          "details": [
            "Real-time GPS data to facilitate accurate pick-up and delivery.",
            "Location data of drivers for route optimization and efficient service management."
          ]
        },
        {
          "title": "Account and Usage Information",
          "details": [
            "Features accessed",
            "Pages viewed",
            "Click patterns",
            "App performance and crash reports",
            "Device details, such as IP address, operating system, browser type, and unique device identifiers"
          ]
        },
        {
          "title": "Communication Data",
          "details": [
            "Call and SMS logs for delivery coordination (if allowed by applicable law)",
            "Chat records within the Tatkal Delivery app",
            "Email correspondence"
          ]
        },
        {
          "title": "Uploaded Files",
          "details": [
            "Images (e.g., photos of parcels, proof of delivery)",
            "Documents (e.g., invoices, receipts, or other materials)"
          ]
        }
      ]
    },
  {
    id: "use-info",
    title: "How We Use Your Information",
    content:
      "Your data is used for service provision, payment processing, communication, legal compliance, fraud prevention, and marketing (subject to consent).",
    sectionsList: [
    {
      "title": "Service Provision and Management",
      "details": [
        "To process bookings for packing, moving, or delivery services",
        "To coordinate between users and delivery partners",
        "To track and update delivery progress"
      ]
    },
    {
      "title": "Payment Processing",
      "details": [
        "To process payments, refunds, and generate invoices"
      ]
    },
    {
      "title": "Improvement of Services",
      "details": [
        "To analyze user behavior and preferences to improve our website and app experience",
        "To develop new features and optimize service performance"
      ]
    },
    {
      "title": "Communication",
      "details": [
        "To send updates, transaction details, and service-related notifications",
        "To respond to inquiries, provide support, and resolve issues"
      ]
    },
    {
      "title": "Legal Compliance",
      "details": [
        "To fulfill legal, regulatory, and contractual obligations",
        "To assist law enforcement when required"
      ]
    },
    {
      "title": "Fraud Prevention",
      "details": [
        "To detect and prevent unauthorized activities, fraud, and abuse"
      ]
    },
    {
      "title": "Marketing and Promotions",
      "details": [
        "To send you promotional offers, discounts, and updates about new services (subject to your consent)"
      ]
    }
  ]
    },
  {
    id: "share-info",
    title: "Sharing Your Information",
    content:
      "We may share your information with delivery partners, third-party service providers, and legal authorities as required.",
      "sectionsList": [
        {
          "title": "Delivery Partners",
          "details": [
            "To complete your delivery requests, we share relevant information with delivery personnel, such as pickup and drop-off details."
          ]
        },
        {
          "title": "Third-Party Service Providers",
          "details": [
            "Payment processing",
            "Identity verification",
            "IT infrastructure hosting",
            "Data analytics"
          ]
        },
        {
          "title": "Legal and Regulatory Authorities",
          "details": [
            "Comply with legal obligations",
            "Protect our legal rights",
            "Respond to lawful requests by public authorities, including law enforcement"
          ]
        },
        {
          "title": "Business Transfers",
          "details": [
            "In the event of a merger, acquisition, or sale of all or part of our business, user information may be transferred to the new entity."
          ]
        }
      ]
    },
  {
    id: "data-retention",
    title: "Data Retention",
    content:
      "We retain your data as long as necessary for service delivery or legal obligations. Deleted accounts are anonymized unless otherwise required by law.",
  },
  {
    id: "security",
    title: "Security Measures",
    content:
      "We use encryption, secure servers, and regular audits to protect your data. However, no system is 100% secure.",
    "sectionsList": [
    {
      "title": "Security Measures",
      "details": [
        "Encryption of sensitive information during transmission",
        "Secure data storage using firewalls and multi-layered access controls",
        "Regular vulnerability assessments and audits",
        "However, no system is 100% secure, and we cannot guarantee absolute security."
      ]
    }
  ]
    },
  {
    id: "rights",
    title: "Your Rights",
    content:
      "You have the right to access, correct, delete your personal data (subject to legal requirements), and withdraw consent for processing activities.",
    "sectionsList": [
    {
      "title": "Access and Correction",
      "details": [
        "Request access to the personal data we hold about you.",
        "Request corrections to inaccurate or incomplete data."
      ]
    },
    {
      "title": "Data Deletion",
      "details": [
        "Request deletion of your account and associated data (subject to legal requirements)."
      ]
    },
    {
      "title": "Data Portability",
      "details": [
        "Receive your personal data in a structured, machine-readable format."
      ]
    },
    {
      "title": "Consent Withdrawal",
      "details": [
        "Opt-out of marketing communications or withdraw previously given consent for specific processing activities."
      ]
    },
    {
      "title": "Contact Information",
      "details": [
        "To exercise your rights, contact us at support@rapidroute.com."
      ]
    }
  ]
    },
  {
    id: "cookies",
    title: "Cookies and Tracking Technologies",
    content:
      "We use cookies to enhance your experience. You can manage your preferences in browser settings.",
      "sectionsList": [
        {
          "title": "Usage of Cookies",
          "details": [
            "Analyze website traffic and app usage.",
            "Personalize user experience.",
            "Store your preferences.",
            "You can manage cookie settings in your browser or device settings."
          ]
        }
      ]
    },
  {
    id: "changes",
    title: "Changes to This Privacy Policy",
    content:
      "We may update this policy from time to time. The latest version will be available on our website.",
  },
  {
    id: "contact",
    title: "Contact Us",
    content:
      "For questions, contact us at support@rapidroute.com or visit us at our office.",
    "sectionsList": [
    {
      "title": "Contact Information",
      "details": [
        "RapidRoute Logistics LLP",
        "Email: tatkaldelivery@gmail.com",
      ]
    }
  ]
    },
];

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* Header Section */}
      <Box
        sx={{
          background: "#C88F13",
          color: "white",
          py: 6,
          textAlign: "center",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Privacy Policy
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Your privacy is important to us. Here’s how we handle your data.
        </Typography>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {/* Sidebar Navigation */}
          <Grid item xs={12} md={3}>
            <Paper elevation={3} sx={{ p: 2, position: "sticky", top: 20 }}>
              <Typography variant="h6" gutterBottom>
                Sections
              </Typography>
              <List>
                {sections.map((section) => (
                  <ListItem
                    button
                    key={section.id}
                    component="a"
                    href={`#${section.id}`}
                  >
                    <ListItemText primary={section.title} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          {/* Content */}
          <Grid item xs={12} md={9}>
            {sections.map((section) => (
              <Box key={section.id} id={section.id} sx={{ mb: 4 }}>
                <Typography
                  variant="h4"
                  color={"#F95C19"}
                  fontWeight="bold"
                  gutterBottom
                >
                  {section.title}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {section.content}
                </Typography>
                <Accordion
                  sx={{ mt: 2, boxShadow: "none", border: "1px solid #ddd" }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6" fontWeight="medium">
                      More Details
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" color="textSecondary">
                      {section.content}
                    </Typography>
                  {
                    section?.sectionsList?.map((item, index) => (
                      <div>
                        <h3>{index+1}. {item?.title}</h3>
                    <ul>
                      {
                        item?.details?.map((detail, index) => (
                          <li>{detail}</li>
                        ))
                      }
                    </ul>
                      </div>
                    ))
                  }
                  </AccordionDetails>
                </Accordion>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
