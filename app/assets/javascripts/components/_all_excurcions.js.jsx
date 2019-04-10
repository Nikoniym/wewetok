class AllExcursions extends React.Component {
    render() {
        var excursions = this.props.excursions.map(excursion => {
            return (
                <div key={excursion.id}>
                    <Excursion
                        excursion={excursion}
                        handleDelete={this.props.handleDelete}
                        handleUpdate={this.props.handleUpdate}
                    />
                </div>
            );
        });

        return <div>{excursions}</div>;
    }
}