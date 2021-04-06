import React, { Component } from 'react';
import './styles.css'

class CheckboxEmpresa extends Component {
    state = {
        isEmpresa: false
    };

    onChange = e => {
        this.setState({ isEmpresa: e.target.checked });
    }


    render() {
        const { isEmpresa } = this.state;
        return (
            <>
                <div className="checkedBOX">

                    <h4>{isEmpresa ? "Sou" : "Não sou"} Empresa</h4>
                    <label>
                        <input type="checkbox" name="checkbox-empresa" checked={isEmpresa} onChange={this.onChange} />
                    </label>
                </div>
            </>
        )
    }
}

export default CheckboxEmpresa;