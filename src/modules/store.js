const React = require('react');
const Option = React.createClass({
    render: function(){
        return <option>{this.props.value}</option>;
    }

});

const StoreWorkout = React.createClass({
    _mockWorkouts: [
        {
            "name": "Murph",
            "type": "fortime",
            "description": "Run 1 Mile \n 100 pull-ups \n 200"
        },
        {
            "name": "Tabata Something Else",
            "type": "reps",
            "description": "4 X 20 seconds on seconds"
        }
    ],
    render: function(){
        const opts = [];
        for(let i=0; i<this._mockWorkouts.length; i++){
            opts.push(<Option value={this._mockWorkouts[i].name} />);
        }
        return(
            <div id="logWorkout" class="tabview"> <h2>Record Workout</h2>
            <label htmlFor="chooseWorkout">Workout:</label> 
            <select name="" id="chooseWorkout">
                        {opts}
            </select>
            <label htmlFor="workoutResult">Result:</label> 
            <input id="workoutResult" type="text" />
           <input id="workoutDate" type="date" /> 
           <label htmlFor="notes">Notes:</label> 
           <textarea id="notes"></textarea> 
           <button>Store</button>
</div>
        );
    }
});
module.exports = StoreWorkout;