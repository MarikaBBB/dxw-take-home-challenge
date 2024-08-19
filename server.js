// Import necessary modules
const express = require('express');
const cors = require('cors');
const path = require('path');

// Check if Express.js is installed
console.log('Express is installed, version:', require('express/package').version);

// Create an instance of Express
const app = express();

// Set the port to listen on 
const PORT = process.env.PORT || 5001;

// CORS configuration to allow requests from your frontend
const corsOptions = {
    origin: 'http://127.0.0.1:3000', // Allow this specific origin
    methods: ['GET', 'POST'], // Allow specific HTTP methods
    allowedHeaders: ['Content-Type'], // Allow specific headers
    optionsSuccessStatus: 200 // Legacy browser support
};

app.use(cors(corsOptions)); // Apply CORS middleware

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Hardcoded acronym data
const acronyms = {
  "AGO": "Attorney General’s Office",
  "APA": "Asset Protection Agency",
  "BEIS": "Department for Business, Energy and Industrial Strategy",
  "BERR": "Department for Business, Enterprise and Regulatory Reform",
  "BIS": "Department for Business, Innovation and Skills",
  "CO": "Cabinet Office",
  "CxD": "Chancellor’s Departments (APA, DMO, GAD, HMRC, HMT, NS&I, OBR)",
  "DCLG": "Department for Communities and Local Government",
  "DCMS": "Department for Culture, Media and Sport",
  "DCSF": "Department for Children, Schools and Families",
  "DECC": "Department of Energy and Climate Change",
  "Defra": "Department for Environment, Food and Rural Affairs",
  "DE&S": "Defence Equipment and Support (part of MoD)",
  "DETR": "Department of the Environment, Transport and the Regions",
  "DExEU": "Department for Exiting the European Union",
  "DfE": "Department for Education",
  "DfEE": "Department for Education and Employment",
  "DfES": "Department for Education and Skills",
  "DfID": "Department for International Development",
  "DfT": "Department for Transport",
  "DH": "Department of Health",
  "DIT": "Department for International Trade",
  "DIUS": "Department for Innovation, Universities and Skills",
  "DMO": "Debt Management Office",
  "DPCP": "Department of Prices and Consumer Protection",
  "DPM": "Deputy Prime Minister",
  "DTLR": "Department of Transport, Local Government and the Regions",
  "DVLA": "Driver and Vehicle Licensing Agency (part of DfT)",
  "DWP": "Department for Work and Pensions",
  "ERG": "Efficiency and Reform Group (part of CO)",
  "FCO": "Foreign and Commonwealth Office",
  "GAD": "Government Actuary’s Department",
  "HCS": "Home Civil Service (all civil servants in UK, Scottish and Welsh governments)",
  "HMRC": "Her Majesty’s Revenue and Customs",
  "HMT": "Her Majesty’s Treasury",
  "HO": "Home Office",
  "IPA": "Infrastructure and Projects Authority (part of CO and HMT, successor to the MPA)",
  "Law": "Law officers (AGO, Office of the Advocate General for Scotland)",
  "MoD": "Ministry of Defence",
  "MoJ": "Ministry of Justice",
  "MPA": "Major Projects Authority (part of CO)",
  "NAO": "National Audit Office",
  "NHS": "National Health Service",
  "NICS": "Northern Ireland Civil Service",
  "NIO": "Northern Ireland Office",
  "NS&I": "National Savings and Investments",
  "OBR": "Office for Budget Responsibility",
  "ODPM": "Office of the Deputy Prime Minister",
  "ONS": "Office for National Statistics",
  "PM": "Prime Minister",
  "Scot": "Scotland Office",
  "SG": "Scottish Government",
  "UKREP": "United Kingdom Permanent Representation to the European Union",
  "Wal": "Wales Office",
  "WG": "Welsh Government",
  "ACSES": "Annual Civil Service Employment Survey (ONS dataset)",
  "AME": "Annually Managed Expenditure",
  "AO/AA": "Administrative officer/administrative assistant (civil service grade)",
  "API": "Application Programming Interface",
  "AR": "Annual Report",
  "BUD": "Budget",
  "CAME": "Capital Annually Managed Expenditure",
  "CDEL": "Capital Departmental Expenditure Limit",
  "CSPS": "Civil Service People Survey (Cabinet Office dataset)",
  "DEL": "Departmental Expenditure Limit",
  "EO": "Executive officer (civil service grade)",
  "FoI": "Freedom of Information",
  "FTE": "Full-time equivalent",
  "G6, G7": "Grade 6 and Grade 7 (civil service grade)",
  "IfG": "Institute for Government",
  "IFRS": "International Financial Reporting Standards",
  "IT": "Information Technology",
  "MoG": "Machinery of government",
  "NGO": "Non-governmental organisation",
  "OSCAR": "Online System for Central Accounting Reporting",
  "PAC": "Public Accounts Committee",
  "PASC": "Public Administration Select Committee",
  "PESA": "Public Expenditure Statistical Analyses",
  "PSE": "Public Sector Employment (ONS dataset)",
  "Q (Q1 etc.)": "Quarter",
  "QDS": "Quarterly Data Summary",
  "RAG": "Red – Amber – Green (rating scheme)",
  "RAME": "Resource Annually Managed Expenditure",
  "RDEL": "Resource Departmental Expenditure Limit",
  "SCS": "Senior Civil Service",
  "SEO/HEO": "Senior Executive Officer/Higher Executive Officer (civil service grade)",
  "SR": "Spending Review/Spending Round",
  "SRP": "Structural Reform Plan",
  "TME": "Total Managed Expenditure",
  "WGA": "Whole of Government Accounts",
  "WMI": "Workforce Management Information"
};


// Define a route to return the acronyms data as a JSON response
app.get('/api/acronyms', (req, res) => {
  res.json(acronyms);
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
