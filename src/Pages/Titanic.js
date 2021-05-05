import React from 'react';

function Titanic() {
  return (
    <div className='Titanic'>
      <h1>Titanic</h1>
      <iframe className="titanicDashboard" src="http://localhost:5601/app/dashboards#/view/2bfd13d0-a371-11eb-8b06-83ffd8859382?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-15m,to:now))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(enhancements:(),table:!n,vis:(colors:('0':%23BF1B00,'1':%23629E51),legendOpen:!t)),gridData:(h:15,i:c0de3725-69f3-4106-9df0-7dd8da7e3b7a,w:48,x:0,y:0),id:a1a1bfb0-a352-11eb-8b06-83ffd8859382,panelIndex:c0de3725-69f3-4106-9df0-7dd8da7e3b7a,type:visualization,version:'7.11.1'),(embeddableConfig:(enhancements:()),gridData:(h:14,i:ae0ce27d-75d1-4759-b05a-49d76a077d64,w:17,x:0,y:15),id:'60418140-a357-11eb-8b06-83ffd8859382',panelIndex:ae0ce27d-75d1-4759-b05a-49d76a077d64,type:visualization,version:'7.11.1'),(embeddableConfig:(enhancements:(),vis:(legendOpen:!t)),gridData:(h:14,i:'58126a4a-013c-4ca7-ad98-3eef74370495',w:15,x:17,y:15),id:'3980d690-a353-11eb-8b06-83ffd8859382',panelIndex:'58126a4a-013c-4ca7-ad98-3eef74370495',type:visualization,version:'7.11.1'),(embeddableConfig:(enhancements:(),vis:(legendOpen:!t)),gridData:(h:14,i:'2cd4705b-8ad9-40cc-89da-1f23368bb6d2',w:16,x:32,y:15),id:a21fd840-a371-11eb-8b06-83ffd8859382,panelIndex:'2cd4705b-8ad9-40cc-89da-1f23368bb6d2',type:visualization,version:'7.11.1')),query:(language:kuery,query:''),tags:!(),timeRestore:!t,title:'Titanic%20Dashboard',viewMode:view)" height="600" width="800"></iframe>
    </div>
  );
}

export default Titanic;