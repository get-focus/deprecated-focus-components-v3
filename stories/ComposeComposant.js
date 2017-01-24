import map from 'lodash/map'
import React, {Component, PropTypes} from 'react';
import isArray from 'lodash/isArray'
import isString from 'lodash/isString'
import isBoolean from 'lodash/isBoolean'
import  InputText from '../input-text';
import isObject from 'lodash/isObject'
import SelectRadio from '../select-radio';
import isFunction from 'lodash/isFunction'

import '../src/style/storybook.scss'

function ComposantComposant ({Composant, propsComposant }) {
  return <Composant {...propsComposant} />
}

ComposantComposant.propTypes = {
  Composant: React.PropTypes.func,
  propsComposant: React.PropTypes.object,
};



import i18next from 'i18next';
import Modal from '../modal';
import Button from '../button';


class SurComposantCompose extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true,
            ...props.Composant.defaultProps
        };
    };

    renderInputComposant(subElement) {
      return (
        <InputText
           onChange={(value) => this.setState({[subElement] : value})}
           rawInputValue={this.state[subElement]}/>
      )
    }
    renderBoolComposant(subElement) {
      return (
        <SelectRadio
          onChange={(value) => this.setState({[subElement] : !this.state[subElement]})}
          rawInputValue={this.state[subElement]}
          values={[{code: true, label: 'True'}, {code: false, label: 'False'}]}/>

      )
    }
    renderFuncComposant(subElement){
      return (
        <div data-focus='documentation-input'><InputText
           onChange={(value) => {
             try{
               isFunction(eval(value))
             }catch (ex){
               this.setState({['onChangeFunc'+subElement]: value, ['isOnChangeFunc'+subElement]: false, ['onChangeError'+subElement]: "Pas une fonction"})
               return;
             }
             try{
               eval(value)('test')
               this.setState({[subElement] : eval(value),['onChangeFunc'+subElement]: value,['onChangeError'+subElement]: null, ['isOnChangeFunc'+subElement]: true})
             }catch (t) {
               this.setState({['onChangeFunc'+subElement]: value, ['isOnChangeFunc'+subElement]: false, ['onChangeError'+subElement]: "Votre fonction génère une erreur :"+t})
             }
          }}
           rawInputValue={this.state.onChangeFunc}
           />
           {this.state.isOnChangeFunc && <i className="material-icons">check</i>}
           <div data-focus='documentation-error'>{this.state.onChangeError && <span style={{color: 'red'}}>{this.state.onChangeError}</span>}</div>
         </div>
      )
    }
    renderTabWithObject(subElement, defaultType){
      console.log(this.state.isOnChangeArray)
      return (
        <div><InputText
           onChange={(value) => {
             try{
               isArray(eval(value))
               this.setState({[subElement] : eval(value), ['onChangeArray'+subElement]: value, ['isOnChangeArray'+subElement]: true})

             }catch (ex){
               this.setState({['onChangeArray'+subElement]: value, ['isOnChangeArray'+subElement]: false})
             }
          }}
           rawInputValue={this.state['onChangeArray'+subElement]}
           />
           {this.state.isOnChangeArray && <i className="material-icons">check</i>}
         </div>
      )
    }
    renderTabComposant(subElement, defaultType) {
      return (
        <SelectRadio
          onChange={(value) => this.setState({[subElement] : value})}
          rawInputValue={this.state[subElement]}
          values={defaultType.map(el => ({code: el, label: el || 'undefined'}))}/>

      )
    }

    renderAllComposant(element){
      if(this.props.defaultType[element] === 'string'){
        return this.renderInputComposant(element)
      }else if(isArray(this.props.defaultType[element]) && !isObject(this.props.defaultType[element][0]) ){
        return this.renderTabComposant(element, this.props.defaultType[element])
      }else if(this.props.defaultType[element] === 'arrayWithObject'){
        return this.renderTabWithObject(element, this.props.defaultType[element])
      }else if(this.props.defaultType[element] === 'bool'){
        return this.renderBoolComposant(element)
      }else if(this.props.defaultType[element] === 'func'){
        return this.renderFuncComposant(element)
      }else {
        return this.renderInputComposant(element)
      }
    }
    render() {
        const list = {...this.props.defaultType}
        console.log(list)
        return (
            <div data-focus='documentation'>
              <div data-focus='documentation-props'>
                <div data-focus='documentation-props-title'>Les props</div>
                {list && map(Object.keys(list), (element) => {
                     return <div data-focus='documentation-props-content' >
                       <div data-focus='documentation-label'>{element}</div>
                       <div data-focus='documentation-input'>
                         {this.renderAllComposant(element)}
                       </div>
                     </div>
                   })}
              </div>

              <div data-focus='documentation-composant'>
                <div data-focus='documentation-composant-title'>Le Composant</div>
                <div data-focus='documentation-composant-content'>{this.state.isVisible && <div><ComposantComposant propsComposant={this.state} Composant={this.props.Composant}/></div>}</div>
              </div>

              <div data-focus='documentation-button'><button onClick={() => this.setState({isVisible: !this.state.isVisible})}>Faire revivre</button></div>
            </div>
        );
    };
};

SurComposantCompose.displayName = 'SurComposantCompose';
// SurComposantCompose.propTypes = {
//     cancelButtonLabel: PropTypes.string,
//     cancelHandler: PropTypes.func,
//     confirmButtonLabel: PropTypes.string,
//     confirmHandler: PropTypes.func
// };
// SurComposantCompose.defaultProps = {
//     open: false,
//     cancelButtonLabel: 'modal.confirmation.cancel',
//     confirmButtonLabel: 'modal.confirmation.confirm'
// };
export default SurComposantCompose;


// if(isArray(this.state[element])){

// }


// return <div>{map(this.state[element], (subElement, index)=> {
//   if(isObject(subElement)) return <div>{map(Object.keys(subElement), subSubElement => {
//     return <div>{subSubElement} : <InputText rawInputValue={subElement[subSubElement]} onChange={(value) => {
//       const newTab = [...this.state[element]];
//       newTab[index] = {...subElement, [subSubElement] : value};
//       this.setState({
//       [element] : newTab
//
//     })
//   }
//   }/></div>
//   })}</div>
//   return <div>{index} : <InputText rawInputValue={subElement} onChange={(value) => {
//     const newTabb = [...this.state[element]]
//     newTabb[index] = value
//     this.setState({
//     [element] : newTabb
//
//   })}
// }/></div>
// })}</div>
