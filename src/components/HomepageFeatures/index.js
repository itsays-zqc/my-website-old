import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';


// var base = 'my-website';
// const fullLink = useBaseUrl(link);

const FeatureList = [
  {
    title:'Frequently Asked Questions',
   
    Svg: require('@site/static/img/book.svg').default,
    
    description: (
      <>
        <div style={{ textAlign: 'left' }}>
          <a href="/my-website/docs/faq/">    1.What is Max-Optics? </a>
        </div>

        <hr style={{ margin: '0.25rem 0' }}/>

        <div style={{ textAlign: 'left' }}>
          <a href="/my-website/docs/faq/faq1">    2.How to install Max-Optics?</a>
        </div>


        <hr style={{ margin: '0.25rem 0' }}/>
        <div style={{ textAlign: 'left' }}>
          <a href="/my-website/docs/faq/faq2">    3.How to obtain a license? </a>
        </div>


        <hr style={{ margin: '0.25rem 0' }}/>
        <div style={{ textAlign: 'left' }}>
          <a href="/my-website/docs/faq/faq3">    4.How to obtain technical service support? </a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>

       
      </>
    ),
    
    
  },
  {
    title: 'Tutorials',
    Svg: require('@site/static/img/hat.svg').default,
    description: (
      <>
              {/* <hr /> */}

        <div style={{ textAlign: 'left' }}>
          <a href="/my-website/docs/tutorial/simulation/fde">1.what is FDE?</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>

  
        <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/tutorial/simulation/fdtd">2.what is FDTD?</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>

        <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/tutorial/simulation/eme">3.what is EME?</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>


        <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/tutorial/material">4.how to set material?</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>

        <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/category/simulation">5.how to simulation?</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>

       
        
      </>
    ),
  },
  
  {
    title: 'Example Library',
    Svg: require('@site/static/img/document.svg').default,
    description: (
      <>
       {/* <hr /> */}
        <div style={{ textAlign: 'left' }}>
          <a href="/my-website/docs/category/pic">1.PIC</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>
  
        <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/tutorial/mode/fdtd">2.Grating</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>

        <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/tutorial/mode/eme">3.Metamaterial</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>

        <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/tutorial/material">4.PD</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>

        {/* <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/tutorial/t1">5.PD(by SDK)</a>
        </div> */}
        {/* <hr style={{ margin: '0.25rem 0' }}/> */}

        <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/tutorial/mode/eme">6.MOD</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>


        {/* <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/tutorial/material">7.MOD(by SDK)</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/> */}


        <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/tutorial/t1">8.Lasers</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>

        
        <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/tutorial/t1">9.Optical scattering and far-field radiation</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>
       
      </>
    ),
  },


  {
    title: 'How do I',
    Svg: require('@site/static/img/tool.svg').default,
    description: (
      <>
         {/* <hr /> */}
        <div style={{ textAlign: 'left' }}>
          <a href="/my-website/docs/tutorial/mode/fde">1.如何调出所用命令？（待）</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>
  
        <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/tutorial/mode/fdtd">2.做一个例子,从mo.sdk.doc到knowledge base的item?（待）</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>


        <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/tutorial/mode/eme">3.用GUI创建?（待）</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>

        <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/tutorial/material">4.用SDK创建?（待）</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>
        
       
        
      
      </>
    ),
  },

];


function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--6 ')}>
      <div className='title'>
        <div className="text--left">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="feature-content">
          <h3 style={{fontSize:25,marginBottom: '1rem'}}>{title}</h3>
        </div>
      </div>
      
      <div className="text--left padding-horiz--md">
        <p>{description}</p>
      </div>
    </div>
  );
}




export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}


