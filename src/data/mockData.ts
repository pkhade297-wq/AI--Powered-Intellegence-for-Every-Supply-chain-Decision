import { PromptScenario, ConnectedModule, IntegrationConnector } from '../types';

export const LOGO_URL = 'https://lh3.googleusercontent.com/aida/AEtjO1UIHSswRXohfuuFkRnyMsnbxU5CrRh2vEnjj5G5Hqu6ZyDcUGd4zE6XzgnCip8AxcXfmAx99OlHuXQpqAJ7e5zfRHa2J7MU0bCiTkqyGar4gxti8lLb4-2wW5hHJ4E1SU73hFVxu0ECjJ4lHMLHMeEm45BfR3toujtNUOpZeuzo6x5foLMHij4GatTT5_znMYGH7ZwKIAr7gL7rxZCJw4INWpmHrHkjox6KbslLFFl5m6j-ugeGgu70rB0';

export const ELENA_VANCE_AVATAR = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0Np1WW54Utmjo_ThxY-9dqqHCLmiC4lYjC13PEtH1fVsH_qcGWcZpb_wgwlNW_abYsppw-KQqTDB8bzYeq6hWsARDLyTzPZQ1HkTSoqKQtLIwSlewYzBPD8FvtperRtTadmdo99w4bVOMjMeOPsUTna_wSQaiqDGzUiC3E3jWXXo6DHVc4RUMQBGwxnddndcdZTRbPBs4Qtydz9UPdPt4ZkpHtZ-SCHJJ6TGWNuiY-3cuGxfzUaor';

export const USER_AVATAR = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0AMb91fC4MY2x0O9Qfb97LVXhY0ZGKehEl8U4ZNEmTZZzRjH1sTLMo7EJj78t-gZLKeHqJqkKISif3ZJpiZ6-suXYKPqAqNMR73Qc-iT0ced1GiI9Z-7bekk7EziCNjS91DGrnkZuVOXqw2MRRT0gu4xCxvAIEn70_DvFt4oMe2ry3NmgsbCZD9Nr-qH2gYjGjTfjZO670V2Zs8wtYaGOEz3II0fEiy2B7yIpsdpnC9U9XAV8ALnS';

export const CASE_STUDY_IMAGES = {
  corn: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCs480EgxuRrDJP1L2a-ATi9bNRTymw_vLkzfmwHqE0dFSgcAdx3b2tee4HUKZo7tmt-DDeWaqY4Tekq4SZoHcADmUJb1wpOrd4PIs8YKiFKtzbe5Ksn3t6cbeZ726HcXUA8K8pl2GYJK2LVDwyL3FsIoGFSlbXp4pzXXkRFoGdDs8HHOphTVe4l3aDUDuJtbKIEBIUsbojuA9chlh099JEENM1QL2b-chFxAIbYgnK2C-qJ-A7j-jK',
  conditioning: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqeztKkqBn01YQldEMBjVOicOesLVXcsleALciNFdha2szJSUDCzmWqhoPvJ2AyBHhgNeldklDek9FsTSoBHQCgdt3qXzISwqoiYYjjCZCLa9PmWR31YlTyZxC3hWoSxyagAl2cS4gB5357r8wcfu9ZvG5F7HrpKaK28JSZJE5Kc51bzvJP2ocDl3OKQoSbWReT-VLROzYUWOqBl9lp45rrBj-i2sCS038we6749vhK3_koCOojRNy',
  agronomist: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDADR4oDRTIBoZ4nEZ3GrFUmIM9pIRuiHjXVZevJpKw30I3E-eR6vDdf7bGOFvQytiIRcoa8sTVFSCZ1s6rDjohv2yLARoi3dSeyjkMdCfDH1xd9l56YIBseXqatFTSKmm-Lm4ftMgs6EYRLFhjNNqFaQGYF4CAvdOtQoZ7oqvFBjeU6JtR73SOH-s3XuzQ4Uoa1hSXYdNGHOM3Lbxsiwyy42je_p1Yw-U4GBhocYu_g02MZySNHocX'
};

export const PROMPT_SCENARIOS: PromptScenario[] = [
  {
    id: 1,
    category: 'QUALITY DRIFT',
    categoryColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    title: 'Analyse Lot #9281 Quality Drift',
    description: 'Investigate vigor degradation in hybrid corn stored at Hyderabad Central.',
    prompt: 'Evaluate Lot #9281 stored at Hyderabad Central. We detected a 4.2% vigor dip over the last 14 days. Suggest root-cause and optimal disposition protocol before germination degrades past commercial threshold.',
    variety: 'Zea Mays (DKC-9108) • Lot #9281',
    confidence: '98.4%',
    narrative: 'Lot #9281 exhibits accelerated metabolic respiration caused by a local micro-climate relative humidity (RH) spike (74.8% vs 58% baseline) in Depot Bay C-04 between Feb 12-16. If left unmitigated, germination rate will drop below the statutory 85% commercial threshold within 19 days. Recommend immediate multi-echelon transfer of 1,200 MT to Nizamabad Controlled Climate Silo (18°C, 45% RH) and prioritizing packaging sequence.',
    remediationSteps: [
      'Create SAP STO (Stock Transport Order) #STO-8821 for 1,200 MT to Nizamabad Dry Hub.',
      'Re-sequence packaging line #2 to process Lot #9281 into moisture-barrier pouches first.',
      'Trigger automated dispatch for reefer fleet with active telematics logging.'
    ],
    preventedLoss: '₹48.6 Lakh ($58,500)',
    primaryActionText: 'Approve Transfer to Nizamabad',
    primaryActionParam: 'TRANSFER_LOT_9281',
    secondaryActionText: 'Re-run Degradation Simulation',
    lotId: 'LOT-9281-HYD',
    cropName: 'Hybrid Maize DKC-9108',
    vigor: '88.4%',
    vigorChange: '-4.2% (14d)',
    moisture: '11.8%',
    humidity: '74.8% (Bay C-04)',
    anomalyPoint: { x: 260, y: 70, label: 'RH Anomaly (+16.8%)' },
    reasoningSteps: [
      { title: '1. Ingest IoT Bay Humidity Telemetry', description: 'Matched sensor S-942 timestamp with cold-front microclimate shift.' },
      { title: '2. Bio-Kinetic Seed Model', description: 'Simulated Harrington Rule of Thumb: seed longevity halved per 1% moisture rise.' },
      { title: '3. Multi-Echelon Rebalancing Solvers', description: 'Evaluated 4 nearby depots for available conditioned capacity and freight cost.' },
      { title: '4. Financial Value Preservation', description: 'Net gain of ₹48.6 Lakhs vs local distress discounting scenario.' }
    ]
  },
  {
    id: 2,
    category: 'CLIMATE SHOCK',
    categoryColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    title: 'Monsoon Delay Impact (Maharashtra)',
    description: 'Simulate 18-day southwest monsoon deficit across Marathwada cotton belt.',
    prompt: 'Simulate demand reallocation for cotton hybrid Bt-II across Marathwada under a projected 18-day monsoon arrival delay. What is our stockout exposure and re-routing recommendation?',
    variety: 'Gossypium hirsutum (BG-II Bollgard) • Regional Pool',
    confidence: '96.2%',
    narrative: 'Monsoon delay delays sowing window by 2.5 weeks, shifting peak demand from early June to late June. Sowing propensity shifts 14% toward short-duration drought-tolerant varieties (SP-704). Current forward-deployed inventory in Aurangabad will experience 3 weeks idle holding. Recommend pre-emptively diverting 850 MT to Vidarbha where irrigated canal sowing begins 10 days earlier, avoiding ₹1.2 Cr in distress inventory write-down.',
    remediationSteps: [
      'Issue distribution hold for 850 MT in Aurangabad central cross-dock.',
      'Re-allocate allocation quota in ERP to Vidarbha dealer network (tier-1 priority).',
      'Alert production conditioning line to expedite short-duration seed batch TH-402.'
    ],
    preventedLoss: '₹1.24 Crore ($150,000)',
    primaryActionText: 'Re-route 850 MT to Vidarbha',
    primaryActionParam: 'REALLOCATE_COTTON_MARATHWADA',
    secondaryActionText: 'Export Sowing Window Isohyet Map',
    lotId: 'POOL-COT-MAH',
    cropName: 'Cotton Hybrid BG-II',
    vigor: '92.1%',
    vigorChange: '+0.4%',
    moisture: '8.4%',
    humidity: '52.1% (Safe)',
    anomalyPoint: { x: 210, y: 55, label: 'Monsoon Gap (+18d)' },
    reasoningSteps: [
      { title: '1. Meteorological Ensemble Integration', description: 'Parsed ECMWF & IMD 30-day precipitation anomaly models.' },
      { title: '2. Agronomic Sowing Window Elasticity', description: 'Modeled farmer variety substitution behavior in delayed rainfall conditions.' },
      { title: '3. Freight Network Topology', description: 'Calculated optimal back-haul logistics route saving 18% transit cost.' },
      { title: '4. Working Capital Protection', description: 'Mitigated return-goods exposure for perishable season inventory.' }
    ]
  },
  {
    id: 3,
    category: 'PROCESSING BOTTLENECK',
    categoryColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    title: 'Optimise Processing Line TH-402',
    description: 'Gravity separator breakdown causing 420 MT raw cob backlog.',
    prompt: 'Conditioning Plant 2 reported Gravity Separator #3 failure. 420 MT raw cob harvest awaiting threshing and drying. Recommend line reconfiguration to prevent cob fermentation.',
    variety: 'Pearl Millet (Bajra Hybrid MBH-118) • Plant #2',
    confidence: '99.1%',
    narrative: 'Raw cobs at 17.5% harvest moisture will initiate heat build-up and fungal spore development if not dried within 36 hours. Line #1 (currently processing Sorghum with low urgency) can be dynamically re-sequenced in 45 minutes using automated CIP protocol. Diverting 420 MT of Bajra to Line #1 dries the crop to safe 11% moisture 22 hours ahead of spoilage inflection point.',
    remediationSteps: [
      'Trigger Automated CIP purge on Line #1 at 14:00 hrs.',
      'Divert harvest haulers from Gate 3 to Dump Pit Alpha for immediate dryer intake.',
      'Re-schedule Sorghum batch SG-09 to secondary night shift.'
    ],
    preventedLoss: '₹34.2 Lakh ($41,000)',
    primaryActionText: 'Execute Line #1 Re-sequencing',
    primaryActionParam: 'RESEQUENCE_PLANT_2',
    secondaryActionText: 'Notify Maintenance Crew',
    lotId: 'HARV-BAJ-PL2',
    cropName: 'Hybrid Bajra MBH-118',
    vigor: '91.8%',
    vigorChange: '-1.1% (Harvest)',
    moisture: '17.5% (High)',
    humidity: '68.0%',
    anomalyPoint: { x: 310, y: 85, label: 'Moisture Threshold Alert' },
    reasoningSteps: [
      { title: '1. Plant SCADA Real-Time Event', description: 'Captured mechanical trip signal on Separator motor M-03.' },
      { title: '2. Biochemical Spoilage Kinetic Model', description: 'Calculated critical aerobic respiration curve at 31°C ambient temp.' },
      { title: '3. Mixed Integer Linear Program (MILP)', description: 'Solved plant scheduling matrix across 3 dual-flow conditioning lines.' },
      { title: '4. Clean Changeover Verification', description: 'Ensured zero genetic purity cross-contamination per ISO-9001 specs.' }
    ]
  },
  {
    id: 4,
    category: 'PERISHABILITY RISK',
    categoryColor: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
    title: 'Ageing Inventory Liquidation (Kharif carryover)',
    description: '2,400 MT carryover hybrid paddy reaching 18-month biological viability horizon.',
    prompt: 'We have 2,400 MT of hybrid paddy carryover across 3 regional distribution hubs. The seeds are 14 months old. Recommend dynamic bundling and promotional dispatch before season closes.',
    variety: 'Oryza sativa (Paddy Arize 6444) • Carryover Pool',
    confidence: '97.5%',
    narrative: 'Carryover paddy retains 87.2% germination today, but historical bio-decay kinetics show a sharp drop to 79% if carried into the next humid post-monsoon cycle. Recommending a structured liquidation protocol: bundle 1,600 MT with premium bio-stimulant seed treatment packs for early direct-seeded rice (DSR) zones in Punjab and initiate a 6% targeted early-order discount to institutional farm federations, securing 100% stock clearance.',
    remediationSteps: [
      'Publish authorized promotional pricing tier to Salesforce/ERP for 1,600 MT.',
      'Auto-generate customer allocation lists for 14 verified FPOs with high DSR adoption.',
      'Schedule outbound quality re-certification sample tests with regional seed lab.'
    ],
    preventedLoss: '₹1.85 Crore ($220,000)',
    primaryActionText: 'Authorize FPO Liquidation Quota',
    primaryActionParam: 'LIQUIDATE_PADDY_CARRIER',
    secondaryActionText: 'Generate Quality Re-test Orders',
    lotId: 'POOL-PAD-6444',
    cropName: 'Hybrid Rice Arize 6444',
    vigor: '87.2%',
    vigorChange: '-3.8% (6mo)',
    moisture: '10.2%',
    humidity: '59.0%',
    anomalyPoint: { x: 190, y: 62, label: 'Viability Decay Curve' },
    reasoningSteps: [
      { title: '1. Age-Cohort Survival Analysis', description: 'Calculated Weibull survival curve tailored to tropical storage conditions.' },
      { title: '2. Demand Elasticity Modelling', description: 'Identified non-traditional DSR agronomic zones with high immediate willingness to buy.' },
      { title: '3. Dealer Incentive Simulator', description: 'Balanced dealer commission against full inventory write-down risk.' },
      { title: '4. Legal Viability Assurance', description: 'Confirmed current germination complies with Central Seed Committee standard (80%+).' }
    ]
  }
];

export const CONNECTED_MODULES: ConnectedModule[] = [
  {
    id: 'demand',
    number: '01',
    title: 'AI Demand Forecasting',
    description: 'Multi-season ML forecasting combining historical sales, microclimate weather forecasts, farmer acreage intent, and pest incidence.',
    metric: '+18.4%',
    metricLabel: 'Forecast Accuracy Gain',
    icon: 'monitoring',
    category: 'planning'
  },
  {
    id: 'production',
    number: '02',
    title: 'Production Planning & Grower Allocation',
    description: 'Optimized hybrid seed production across contract grower networks, nursery planting dates, isolation distances, and detasseling windows.',
    metric: '99.2%',
    metricLabel: 'Isolation Compliance',
    icon: 'psychology',
    category: 'planning'
  },
  {
    id: 'procurement',
    number: '03',
    title: 'Procurement Intelligence',
    description: 'Autonomous supplier scorecards, genetic parent line allocation, contract grower settlement automation, and raw seed intake pricing models.',
    metric: '14.2%',
    metricLabel: 'Procurement Cost Reduction',
    icon: 'hub',
    category: 'intelligence'
  },
  {
    id: 'inventory',
    number: '04',
    title: 'Inventory Optimization & Ageing',
    description: 'Multi-echelon inventory optimization (MEIO) factoring in biological seed viability loss, carryover depreciation, and cold chain costs.',
    metric: '₹12.4 Cr',
    metricLabel: 'Capital Released per Season',
    icon: 'inventory_2',
    category: 'operations'
  },
  {
    id: 'processing',
    number: '05',
    title: 'Seed Processing Intelligence',
    description: 'Conditioning, drying, cob sorting, gravity separation, chemical treatment, and packaging line scheduling with zero cross-contamination.',
    metric: '32%',
    metricLabel: 'Plant Throughput Increase',
    icon: 'precision_manufacturing',
    category: 'operations'
  },
  {
    id: 'warehouse',
    number: '06',
    title: 'Warehouse Climate Suite',
    description: 'Continuous IoT integration with temperature and relative humidity sensors, predicting germination decay before standard lab tests detect it.',
    metric: '< 2 hrs',
    metricLabel: 'Anomaly Warning Horizon',
    icon: 'thermostat',
    category: 'operations'
  },
  {
    id: 'logistics',
    number: '07',
    title: 'Logistics & Freight Engine',
    description: 'Reefer container tracking, inter-depot stock rebalancing, dynamic route optimization, and seasonal sowing window arrival SLAs.',
    metric: '-21%',
    metricLabel: 'Seasonal Freight Expense',
    icon: 'local_shipping',
    category: 'operations'
  },
  {
    id: 'control-tower',
    number: '08',
    title: 'Supply Chain Control Tower',
    description: 'Real-time spatial visibility across seed breeding stations, contract farms, processing hubs, central depots, and dealer retail points.',
    metric: '100%',
    metricLabel: 'Germplasm Traceability',
    icon: 'visibility',
    category: 'intelligence'
  },
  {
    id: 'copilot',
    number: '09',
    title: 'AI Supply Chain Copilot',
    description: 'Generative AI and reasoning agents that resolve complex seed supply chain trade-offs, explain recommendations, and execute ERP workflows.',
    metric: '42ms',
    metricLabel: 'Inference Latency',
    icon: 'auto_awesome',
    category: 'intelligence'
  }
];

export const INTEGRATION_CONNECTORS: IntegrationConnector[] = [
  {
    name: 'SAP S/4HANA & ECC',
    certification: 'Certified Integration',
    description: 'Bi-directional real-time sync with SAP MM, PP, SD, and IBP modules via RFC & OData v4.',
    latency: '< 180ms',
    protocol: 'REST / RFC / OData',
    icon: 'cloud_sync'
  },
  {
    name: 'Oracle Cloud SCM & NetSuite',
    certification: 'Oracle Partner Certified',
    description: 'Native REST and SuiteTalk pipelines for work orders, item fulfillments, and purchase allocations.',
    latency: '< 210ms',
    protocol: 'SuiteTalk / REST API',
    icon: 'dataset'
  },
  {
    name: 'Microsoft Dynamics 365',
    certification: 'Certified AppSource Connector',
    description: 'Dual-Write and Dataverse synchronization for Supply Chain Management and Field Service entities.',
    latency: '< 150ms',
    protocol: 'Dataverse / OData',
    icon: 'account_tree'
  },
  {
    name: 'SeedLIMS & Phenotype DBs',
    certification: 'Universal Schema',
    description: 'Direct ingestion of lab germination tests, vigor indexes, genetic purity markers, and moisture logs.',
    latency: 'Real-time Webhook',
    protocol: 'Kafka / gRPC / Webhook',
    icon: 'biotech'
  }
];

export const COMPLEXITY_CHIPS = [
  'Multi-Season Biological Lag',
  'Variable Agronomic Yields',
  'Strict Sowing Window SLAs',
  'Germination & Vigor Decay',
  'Regulatory Quality Limits',
  'Contract Grower Fragmentation',
  'Climatic Precipitation Volatility',
  'Parent Line Synchronization',
  'Cross-Contamination Safeguards',
  'Perishable Carryover Write-Downs'
];
