import React from 'react'
import "./Aboutus.css"

function Aboutus() {

    const values =[
        {title: 'Trust', desc:'We build lasting relationships by safeguarding our members interests and delivering reliable financial solutions.'},
        {title: 'Excellence', desc:'We are committed to providing high-quality services that exceed our members expectations.'},
        {title: 'Integrity', desc:'We uphold honesty, transparency, and accountability in every service we provide.'},
        {title: 'Team work', desc:'We believe that collaboration and mutual support are the foundation of shared success and sustainable growth.'}
    ];

    const stats = [
        {number:'5+', label:'Years of Service'},
        {number:'2k+', label:'Active Members'},
        {number:'50+', label:'Loans Issued'},
        {number:'98%', label:'success Rate'}
    ];
    return (
    <div className='about-section'>

        <div className='about-container'>
            <div className='about-header'>
                <span className='about-badge'>Our story</span>
                <h1 className='about-title'>About ShineUP</h1>
                <p className='subtitle'>Learn more about our journey, our values, and our commitment to helping members achieve financial security and long-term success.</p>

            </div>
            <div className='about-content'>
                <div className='about-text'>
                    <h3>Who we are</h3>
                    <p>Shine Up SACCO is a member-owned savings and credit 
                        cooperative committed to improving the financial well-being of
                        individuals, families, and businesses. We provide secure savings opportunities, 
                        affordable loans, and financial guidance that empower our members to achieve their 
                        personal and economic goals. Through integrity, innovation, and teamwork, we strive to 
                        build a financially strong and prosperous community.
                        </p>
                        <div className='mission-vision'>
                            <div className='mission'>
                                <h3>Our Mission</h3>
                                <p>To empower our members through accessible financial services, 
                                    promoting a culture of saving, responsible borrowing, and 
                                    sustainable economic growth while delivering
                                    exceptional service with integrity and professionalism.</p>

                            </div>
                            <div className='vision'>
                                <h3>Our vision</h3>
                                <p>To be the leading and most trusted SACCO, transforming lives through innovative financial solutions and creating financially empowered communities.</p>

                            </div>

                        </div>

                </div>
                <div className='about-image'>
                    <img src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=90"'/>

                </div>

            </div>

            <div className='stats-grid'>
                {stats.map((stat,idx)=>(
                    <div key={idx} className='statcard'>
                        <div className='statnumber'>{stat.number}</div>
                        <div className='statlabel'>{stat.label}</div>
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