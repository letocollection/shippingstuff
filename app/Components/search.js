// Include React 
var React = require('react');

// var upsAPI = require('shipping-ups');

var ups = new upsAPI({
    environment: 'sandbox', // or live 
    username: 'leonardoh',
    password: 'Superman1!',
    access_key: '9D18C4951A14894C',
    imperial: true // set to false for metric 
});


// ups.time_in_transit({
//             data = {
//                 from: {
//                     city: 'Los Angeles',
//                     state_code: 'CA',
//                     postal_code: '90620',
//                     country_code: 'US'
//                 },
//                 to: {
//                     city: 'Rocklin',
//                     state_code: 'CA',
//                     postal_code: '95765',
//                     country_code: 'US'
//                 },
//                 weight: 10, // set imperial to false for KGS 
//                 pickup_date: '20161031',
//                 total_packages: 1, // number of packages in shipment 
//                 value: null, // Invoice value, set currency in options 
//             }
//         }
//     },
//     function(err, res) {
//         if (err) {
//             console.log(err);
//         }

//         console.log(util.inspect(res, { depth: null }));
//     });



// Create the Search component
// Notice how the header uses .createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Search = React.createClass({

    render: function() {


        return ( < div >
            < h1 > I 'm the Search Component!!</h1> < /div>
        )

    }
});

// Export the componen back for use in other files
module.exports = Search;
