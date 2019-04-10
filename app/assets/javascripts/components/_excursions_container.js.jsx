class ExcursionsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            excursions: []
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.addNewExcursion = this.addNewExcursion.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.updateExcursion = this.updateExcursion.bind(this);
    }

    handleFormSubmit(title, description) {
        let body = JSON.stringify({
            excursion: { title: title, description: description }
        });

        fetch("http://localhost:3000/api/v1/excursions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: body
        })
            .then(response => {
                return response.json();
            })
            .then(excursion => {
                this.addNewExcursion(excursion);
            });
    }

    addNewExcursion(excursion) {
        this.setState({
            excursions: this.state.excursions.concat(excursion)
        });
    }

    handleDelete(id) {
        fetch(`http://localhost:3000/api/v1/excursions/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            console.log("Excursion was deleted!");
            this.deleteExcursion(id);
        });
    }

    deleteExcursion(id) {
        newExcursions = this.state.excursions.filter(excursion => excursion.id !== id);
        this.setState({
            excursions: newExcursions
        });
    }

    handleUpdate(excursion) {
        fetch(`http://localhost:3000/api/v1/excursions/${excursion.id}`, {
            method: "PUT",
            body: JSON.stringify({ excursion: excursion }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            this.updateExcursion(excursion);
        });
    }

    updateExcursion(excursion) {
        let newExcursions = this.state.excursions.filter(f => f.id !== excursion.id);
        newExcursions.push(excursion);
        this.setState({
            excursions: newExcursions
        });
    }

    componentDidMount() {
        fetch("/api/v1/excursions.json")
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({ excursions: data });
            });
    }
    render() {
        return (
            <div>
                <h2>Add new excursion</h2>
                <NewExcursion handleFormSubmit={this.handleFormSubmit} />
                <h2>All excursions</h2>
                <AllExcursions
                    excursions={this.state.excursions}
                    handleDelete={this.handleDelete}
                    handleUpdate={this.handleUpdate}
                />
            </div>
        );
    }
}