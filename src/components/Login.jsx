import React from "react";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', gender: 'Мужчина'}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeGender = this.handleChangeGender.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }
    handleChangeGender(event) {
        this.setState({gender: event.target.gender})
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('Ваше имя: ' + this.state.value);

    }

    render() {
        return (
            <div>
                <h2>LOGIN</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Ваше Имя:
                        {/*<input value='Введите имя' onChange={this.handleChange} value={this.state.value}/>*/}
                        <textarea value='Введите имя' onChange={this.handleChange} value={this.state.value}/>
                        <select value={this.state.gender} onChange={this.state.gender} >
                            <option value='Мужчина'>Мужчина</option>
                            <option value='Женщина'>Женщина</option>
                        </select>
                    </label>
                    <input type='submit' value='Отправить'/>
                </form>
            </div>
        );
    }
}

