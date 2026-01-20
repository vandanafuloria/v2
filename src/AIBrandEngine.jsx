import React, { useState } from 'react';
import './AIBrandEngine.css';

const AIBrandEngine = ({ showExtras = true }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('metrics');
  const [activeMetric, setActiveMetric] = useState('fit');

  if (!showExtras) return null;

  const getIcon = (type) => {
    const icons = {
      fitting: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M7 4H17C18.1 4 19 4.9 19 6V18C19 19.1 18.1 20 17 20H7C5.9 20 5 19.1 5 18V6C5 4.9 5.9 4 7 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      fabric: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 3L3 7L12 11L21 7L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 17L12 21L21 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 12L12 16L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      returns: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 9L9 3L15 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 15L15 21L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      refunds: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      shipping: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M1 3H17L22 8L17 13H1V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2"/>
          <circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      sustainability: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12L10.5 14.5L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      metrics: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 16L12 11L16 15L21 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 10V3H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    };
    return icons[type] || icons.fitting;
  };

  const brandInfo = {
    fitting: {
      title: 'Perfect Fit Guarantee',
      iconType: 'fitting',
      content: [
        { label: 'Size Accuracy', value: '98%', description: 'Our AI analyzes 10,000+ reviews to ensure accurate sizing' },
        { label: 'Fit Satisfaction', value: '94%', description: 'Customers report perfect fit on first try' },
        { label: 'Size Guide', value: 'AI-Powered', description: 'Personalized recommendations based on your measurements' }
      ],
      highlights: [
        'True to size for most body types',
        'Free size exchange within 7 days',
        'Virtual try-on available'
      ]
    },
    fabric: {
      title: 'Premium Fabric Quality',
      iconType: 'fabric',
      content: [
        { label: 'Material', value: '100% Premium Cotton', description: 'Soft, breathable, and durable' },
        { label: 'Quality Score', value: '9.2/10', description: 'Based on customer reviews and expert analysis' },
        { label: 'Care Instructions', value: 'Machine Wash', description: 'Easy care, maintains shape after washing' }
      ],
      highlights: [
        'Pre-shrunk fabric for consistent fit',
        'Colorfast and fade-resistant',
        'Eco-friendly and sustainable sourcing'
      ]
    },
    returns: {
      title: 'Easy Returns',
      iconType: 'returns',
      content: [
        { label: 'Return Window', value: '30 Days', description: 'From date of delivery' },
        { label: 'Return Rate', value: '< 5%', description: 'Low return rate indicates high satisfaction' },
        { label: 'Process Time', value: '2-3 Days', description: 'Quick processing and refund' }
      ],
      highlights: [
        'Free return shipping',
        'No questions asked policy',
        'Instant return label generation'
      ]
    },
    refunds: {
      title: 'Quick Refunds',
      iconType: 'refunds',
      content: [
        { label: 'Refund Time', value: '3-5 Days', description: 'After we receive your return' },
        { label: 'Refund Method', value: 'Original Payment', description: 'Money back to your original payment method' },
        { label: 'Customer Satisfaction', value: '96%', description: 'Satisfied with refund process' }
      ],
      highlights: [
        'Full refund guarantee',
        'No restocking fees',
        'Instant refund for damaged items'
      ]
    },
    shipping: {
      title: 'Fast Shipping',
      iconType: 'shipping',
      content: [
        { label: 'Delivery Time', value: '2-4 Days', description: 'Standard shipping across India' },
        { label: 'Express Delivery', value: '1-2 Days', description: 'Available for metro cities' },
        { label: 'Free Shipping', value: 'Above ₹999', description: 'On orders above ₹999' }
      ],
      highlights: [
        'Real-time tracking',
        'Secure packaging',
        'Cash on delivery available'
      ]
    },
    sustainability: {
      title: 'Sustainable Fashion',
      iconType: 'sustainability',
      content: [
        { label: 'Eco-Friendly', value: '100%', description: 'All products made with sustainable materials' },
        { label: 'Carbon Neutral', value: 'Shipping', description: 'Carbon-neutral shipping options available' },
        { label: 'Ethical Sourcing', value: 'Certified', description: 'Fair trade and ethical manufacturing' }
      ],
      highlights: [
        'Recyclable packaging',
        'Water-saving production',
        'Supporting local artisans'
      ]
    }
  };

  // Graph data for different metrics
  const graphData = {
    fit: {
      label: 'Fit Satisfaction',
      data: [85, 92, 88, 94, 73.8, 91, 94],
      color: '#a58296'
    },
    positive: {
      label: 'Positive Reviews',
      data: [78, 85, 82, 89, 76, 87, 91],
      color: '#4CAF50'
    },
    repeat: {
      label: 'Repeat Purchase',
      data: [65, 72, 68, 75, 70, 78, 82],
      color: '#2196F3'
    },
    delivery: {
      label: 'Delivery Satisfaction',
      data: [88, 91, 89, 93, 87, 92, 95],
      color: '#FF9800'
    },
    rating: {
      label: 'Average Rating',
      data: [4.2, 4.5, 4.3, 4.6, 4.4, 4.7, 4.8],
      color: '#9C27B0'
    },
    issue: {
      label: 'Issue Resolution',
      data: [82, 88, 85, 91, 86, 90, 93],
      color: '#F44336'
    }
  };

  const metrics = [
    { id: 'positive', label: 'Positive' },
    { id: 'repeat', label: 'Repeat' },
    { id: 'fit', label: 'Fit' },
    { id: 'delivery', label: 'Delivery' },
    { id: 'rating', label: 'Rating' },
    { id: 'issue', label: 'Issue' }
  ];

  // Calculate current metric value and percentage
  const currentMetric = graphData[activeMetric];
  const currentValue = currentMetric.data[currentMetric.data.length - 1];
  const percentage = typeof currentValue === 'number' ? currentValue.toFixed(1) : currentValue;
  const displayValue = typeof currentValue === 'number' && currentValue < 10 ? `${currentValue.toFixed(1)}/5` : `${percentage}%`;

  // Render line chart
  const renderChart = () => {
    const data = currentMetric.data;
    const maxValue = Math.max(...data) * 1.1;
    const minValue = Math.min(...data) * 0.9;
    const range = maxValue - minValue;
    const width = 340;
    const height = 160;
    const padding = { top: 15, right: 15, bottom: 35, left: 45 };

    const points = data.map((value, index) => {
      const x = padding.left + (index / (data.length - 1)) * (width - padding.left - padding.right);
      const y = padding.top + (height - padding.top - padding.bottom) - ((value - minValue) / range) * (height - padding.top - padding.bottom);
      return { x, y, value };
    });

    // Create path for line
    const linePath = points.map((point, index) => 
      `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
    ).join(' ');

    // Create path for area fill
    const areaPath = `${linePath} L ${points[points.length - 1].x} ${height - padding.bottom} L ${points[0].x} ${height - padding.bottom} Z`;

    return (
      <div className="chart-container">
        <div className="chart-header">
          <h5 className="chart-title">Trust Metrics</h5>
          <div className="chart-value">{displayValue}</div>
        </div>
        <svg width={width} height={height} className="chart-svg">
          {/* Area fill */}
          <path d={areaPath} fill={`url(#gradient-${activeMetric})`} opacity="0.3"/>
          {/* Gradient definition */}
          <defs>
            <linearGradient id={`gradient-${activeMetric}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={currentMetric.color} stopOpacity="0.4"/>
              <stop offset="100%" stopColor={currentMetric.color} stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map((i) => {
            const y = padding.top + (i / 4) * (height - padding.top - padding.bottom);
            return (
              <line
                key={i}
                x1={padding.left}
                y1={y}
                x2={width - padding.right}
                y2={y}
                stroke="#e5e5e5"
                strokeWidth="1"
                strokeDasharray="2,2"
              />
            );
          })}
          {/* Line */}
          <path
            d={linePath}
            fill="none"
            stroke={currentMetric.color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Data points */}
          {points.map((point, index) => (
            <g key={index}>
              <circle
                cx={point.x}
                cy={point.y}
                r="4"
                fill={currentMetric.color}
                stroke="white"
                strokeWidth="2"
              />
              {/* Tooltip on hover */}
              {index === 4 && (
                <g>
                  <line
                    x1={point.x}
                    y1={padding.top}
                    x2={point.x}
                    y2={height - padding.bottom}
                    stroke="#999"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                  />
                  <rect
                    x={point.x - 30}
                    y={point.y - 35}
                    width="60"
                    height="24"
                    rx="4"
                    fill="#2d2d2d"
                  />
                  <text
                    x={point.x}
                    y={point.y - 18}
                    textAnchor="middle"
                    fill="white"
                    fontSize="11"
                    fontWeight="600"
                  >
                    {index + 1}: {typeof point.value === 'number' && point.value < 10 ? `${point.value.toFixed(1)}/5` : `${point.value.toFixed(1)}%`}
                  </text>
                </g>
              )}
            </g>
          ))}
          {/* X-axis labels */}
          {points.map((point, index) => (
            <text
              key={index}
              x={point.x}
              y={height - padding.bottom + 20}
              textAnchor="middle"
              fill="#666"
              fontSize="10"
              fontWeight="500"
            >
              W{index + 1}
            </text>
          ))}
        </svg>
        {/* Metric filter buttons */}
        <div className="metric-filters">
          {metrics.map((metric) => (
            <button
              key={metric.id}
              className={`metric-filter-btn ${activeMetric === metric.id ? 'active' : ''}`}
              onClick={() => setActiveMetric(metric.id)}
            >
              {metric.label}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const tabs = [
    { id: 'metrics', label: 'Metrics', iconType: 'metrics' },
    { id: 'fitting', label: 'Fit', iconType: 'fitting' },
    { id: 'fabric', label: 'Fabric', iconType: 'fabric' },
    { id: 'returns', label: 'Returns', iconType: 'returns' },
    { id: 'refunds', label: 'Refunds', iconType: 'refunds' },
    { id: 'shipping', label: 'Shipping', iconType: 'shipping' },
    { id: 'sustainability', label: 'Eco', iconType: 'sustainability' }
  ];

  const currentInfo = brandInfo[activeTab] || brandInfo.fitting;

  return (
    <div className={`ai-brand-engine ${isExpanded ? 'expanded' : ''}`}>
      {!isExpanded ? (
        <button
          className="ai-brand-engine-trigger"
          onClick={() => setIsExpanded(true)}
          aria-label="Open AI Brand Engine"
        >
          <div className="trigger-icon">
            <img 
              src="https://img.freepik.com/premium-vector/generate-ai-abstract-vector-symbol-artificial-intelligence-colorful-stars-icon_34480-1539.jpg" 
              alt="AI Icon" 
              className="ai-icon-image"
            />
          </div>
          <div className="trigger-text">
            <span className="trigger-label">AI Brand</span>
            <span className="trigger-sublabel">Engine</span>
          </div>
          <div className="trigger-badge">AI</div>
        </button>
      ) : (
        <div className="ai-brand-engine-panel">
          {/* Header */}
          <div className="panel-header">
            <div className="header-left">
              <div className="header-icon">
                <img 
                  src="https://img.freepik.com/premium-vector/generate-ai-abstract-vector-symbol-artificial-intelligence-colorful-stars-icon_34480-1539.jpg" 
                  alt="AI Icon" 
                  className="ai-icon-image header-ai-icon"
                />
              </div>
              <div>
                <h3 className="panel-title">AI Brand Engine</h3>
                <p className="panel-subtitle">Powered by AI insights</p>
              </div>
            </div>
            <button
              className="panel-close-btn"
              onClick={() => setIsExpanded(false)}
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Tabs */}
          <div className="panel-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-icon">{getIcon(tab.iconType)}</span>
                <span className="tab-label">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="panel-content">
            {activeTab === 'metrics' ? (
              renderChart()
            ) : (
              <>
                <div className="content-header">
                  <div className="content-icon">{getIcon(currentInfo.iconType)}</div>
                  <h4 className="content-title">{currentInfo.title}</h4>
                </div>

                {/* Stats Grid */}
                <div className="stats-grid">
                  {currentInfo.content.map((item, index) => (
                    <div key={index} className="stat-card">
                      <div className="stat-value">{item.value}</div>
                      <div className="stat-label">{item.label}</div>
                      <div className="stat-description">{item.description}</div>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="highlights-section">
                  <h5 className="highlights-title">Key Highlights</h5>
                  <ul className="highlights-list">
                    {currentInfo.highlights.map((highlight, index) => (
                      <li key={index} className="highlight-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="highlight-icon">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>

          {/* Footer */}
          <div className="panel-footer">
            <div className="footer-badge">
              <img 
                src="https://img.freepik.com/premium-vector/generate-ai-abstract-vector-symbol-artificial-intelligence-colorful-stars-icon_34480-1539.jpg" 
                alt="AI Icon" 
                className="ai-icon-image footer-ai-icon"
              />
              <span>AI-Powered Insights</span>
            </div>
            <p className="footer-note">Data updated in real-time from customer reviews and brand analytics</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIBrandEngine;

