import React from 'react'
import "./Aboutus.css"

function Aboutus() {

    const values =[
        {title: 'Innovation', desc:'Pushing boundaries with cutting edgesoluions'},
        {title: 'Excellence', desc:'Delivering quality in every service we provide'},
        {title: 'Integrity', desc:'Building Trust through Transparency and Honesty'},
        {title: 'Global impact', desc:'Empowering proffessionals worldwide'}
    ];

    const stats = [
        {number:'5+', label:'Years of excellence'},
        {number:'2k+', label:'Students trained'},
        {number:'50+', label:'Certified Instructors'},
        {number:'98%', label:'success Rate'}
    ];
    return (
    <div className='about-section'>

        <div className='about-container'>
            <div className='about-header'>
                <span className='about-badge'>Our story</span>
                <h1 className='about-title'>About Stratcom</h1>
                <p className='subtitle'>Empowering the next generation of Tech proffessionals in Africa</p>

            </div>
            <div className='about-content'>
                <div className='about-text'>
                    <h3>Who we are</h3>
                    <p>At Stratcom, we transform ideas into poweful digital
                        experience by combining creativity,technical expertise  
                        and commitment to excellence. whether developing websites, or
                        applications or custom software, we are dedicated to serve you
                        </p>
                        <div className='mission-vision'>
                            <div className='mission'>
                                <h3>Our Mission</h3>
                                <p>Democratize Tech education and create more employment 
                                    opportunities for Youth in Africa</p>

                            </div>
                            <div className='vision'>
                                <h3>Our vision</h3>
                                <p>To be Africa's leading Tech Hub and insititution recognized for excellence and Innovation </p>

                            </div>

                        </div>

                </div>
                <div className='about-image'>
                    <img src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"'/>

                </div>

            </div>

            <div className='stats-grid'>
                {stats.map((stat,idx)=>(
                    <div key={idx} className='statcard'>
                        <div className='statnumber'>{stat.number}</div>
                        <div className='label'>{stat.label}</div>
                    </div>
                ))}

            </div>
            <div className='values-section'>
                <h2 className='values-title'>Our values</h2>
                <div className='values-grid'>
                    {values.map((values,idx)=>(
                        <div key={idx} className='value-card'>
                            <h4>{values.title}</h4>
                            <p>{values.desc}</p>
                        </div>
                    ))}

                </div>

            </div>

        </div>

    </div>
    

    )
}

export default Aboutus