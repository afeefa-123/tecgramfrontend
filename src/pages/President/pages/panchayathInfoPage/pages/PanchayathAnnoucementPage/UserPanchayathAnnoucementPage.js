import React, { useState } from 'react'
import { DivScrollableWithGeasture, UnderNavigationOuterDiv } from '../../../../../../components/divisions'
import { AnnoucementSection } from './AnoucementDiv'
import { ShowAddAnnoucementModel } from './Model';
import { RoundedIconButton } from '../../../../../../components/PlaneButton1';
import { AiOutlinePlus } from 'react-icons/ai';

export function PresidentPanchayathAnnoucementPage() {
  const [showAddAnnoucementModel , setShowAddAnnoucementModel] = useState(false);

  function showAddAnnoucementModelFun(){
    setShowAddAnnoucementModel(true);
  }
  function closeAddAnnoucementModelFun(){
    setShowAddAnnoucementModel(false);
  }
  return (
    <UnderNavigationOuterDiv>
      <DivScrollableWithGeasture>
        <AnnoucementSection/>
      </DivScrollableWithGeasture>
      <div style={{ position: 'absolute', bottom: '15px', right: '15px' }}><RoundedIconButton onClick={showAddAnnoucementModelFun}><AiOutlinePlus size={25} /></RoundedIconButton></div>
      <ShowAddAnnoucementModel show={showAddAnnoucementModel} onClose={closeAddAnnoucementModelFun}/>
    </UnderNavigationOuterDiv>
  )
}
