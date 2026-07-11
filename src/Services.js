import React from 'react'
import './Services.css'

function Services() {
  // javascript runs here
  const servicesData = [
    {
        id: 1,
        title: 'Savings Accounts',
        icon: '💰',
        description: 'Secure your future by growing your savings with confidence and convenience.',
        features: ['secure and flexible saving palans', 'Return on saving', 'Career support','Easy deposits and withdraws']
    },
    {
        id: 2,
        title: 'Affordable Loans',
        icon: '💳',
        description: 'Access fast, flexible, and affordable financing to achieve your personal or business goals.',
        features: ['Low-interest loan', 'Quick application and approval process','Flexible repayment plans.'],
    },
    {
        id: 3,
        title: 'Investment Opportunities',
        icon: '📈',
        description: 'Grow your wealth through smart investment solutions designed for long-term financial success.',
        features: ['Investment savings plans','Financial growth opportunities','Safe and reliable investment options']
    },
    {
        id: 4,
        title: 'Financial Education & Advisory',
        icon: '🎓',
        description: 'Empowering members with the knowledge and skills to make informed financial decisions.',
        features: ['Financial literacy workshops.', 'Savings and budgeting guidance.', 'Business and investment advisory services.']
    }
];

    return (
    <div className='services-section'>
        <div className='services-container'>
            <div className='services-header'>
                <span className='services-badge'>What we Offer</span>
                <h2 className='services-title'>Our Premium Services</h2>
                <p className='services-subtitle'>Explore our trusted financial services designed to help you save more, borrow easily, and grow your wealth with confidence.</p>
            </div>
        </div>
        <div className='services-grid'>
            {
                servicesData.map((service,idx)=>( 
                    <div key={idx} className='service-card'>
                    <div className='service-icon'>{service.icon}</div>
                    <h3 className='service-title'>{service.title}</h3>
                    <p className='service-description'>{service.description}</p>

                    <ul className='service-features'>
                        {
                            service.features.map((feature,index)=>(
                                <li key={index}>{feature}</li>
                            ))
                        }
                    </ul>
                    <button className='service-button'>Learn more...</button>

                    </div>


                ))}

        </div>

    </div>
  )
}

export default Services