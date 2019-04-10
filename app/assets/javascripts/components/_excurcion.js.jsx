class Excursion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editable: false
        };
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit() {
        if (this.state.editable) {
            let title = this.title.value;
            let description = this.description.value;
            let id = this.props.excursion.id;
            let excursion = {title: title, description: description, id: id};
            this.props.handleUpdate(excursion);
        }
        this.setState({
            editable: !this.state.editable
        });
    }

    render() {
        let title = this.state.editable ? (
            <input
                type="text"
                ref={input => (this.title = input)}
                defaultValue={this.props.excursion.title}
            />
        ) : (
            <h3>
                <a href={"excursions/" + this.props.excursion.id}>{this.props.excursion.title}</a>
            </h3>
        );
        let description = this.state.editable ? (
            <input
                type="text"
                ref={input => (this.description = input)}
                defaultValue={this.props.excursion.description}
            />
        ) : (
            <p>{this.props.excursion.description}</p>
        );
        let image = this.state.editable ? (
            <input
                type="text"
                ref={input => (this.image_url = input)}
                defaultValue={this.props.excursion.image_url}
            />
        ) : (
            <img src={this.props.excursion.image_url}/>
        );
        return (
            <div
                style={{
                    margin: "1em",
                    padding: "1em",
                    border: "1px solid #ddd"
                }}
            >
                {title}
                {/*{description}*/}
                {image}
                <button onClick={() => this.handleEdit()}>
                    {this.state.editable ? "Submit" : "Edit"}
                </button>
                {!this.state.editable && (
                    <button
                        onClick={() => this.props.handleDelete(this.props.excursion.id)}
                    >
                        Delete
                    </button>
                )}
            </div>
        );
    }
}