 'use strict';

 var upsAPI = require('shipping-ups');
 var util = require('util');
 var fs = require('fs');
 var request = require('request');

 var ups = new upsAPI({
     environment: 'live', // or live
     access_key: '3D18C484BE3FC3A8',
     username: 'leonardoh',
     password: 'Superman1!'
 });


 ups.time_in_transit({
     from: {
         city: 'Dover',
         state_code: 'OH',
         postal_code: '44622',
         country_code: 'US'
     },
     to: {
         city: 'Charlotte',
         state_code: 'NC',
         postal_code: '28205',
         country_code: 'US'
     }
 }, function(err, res) {
     if (err) {
         console.log(err);
     }

     console.log(util.inspect(res, { depth: null }));
     console.log(res);
 });

 // ups.address_validation({
 //     name: 'Customer Name',
 //     address_line_1: '123 Test Address',
 //     city: 'Charlotte',
 //     state_code: 'NC',
 //     postal_code: '28205',
 //     country_code: 'US'
 // }, function(err, res) {
 //     if (err) {
 //         console.log(err);
 //     }

 //     console.log(util.inspect(res, { depth: null }));
 // });

 ups.rates({
     shipper: {
         name: 'Leonard Oh',
         shipper_number: '3917XW',
         address: {
             address_line_1: '1123 S Boyle Ave',
             city: 'Los Angeles',
             state_code: 'CA',
             country_code: 'US',
             postal_code: '90620'
         }
     },
     ship_to: {
         name: 'Alicia',
         address: {
             address_line_1: '1100 TINKER ROAD',
             city: 'ROCKLIN',
             state_code: 'CA',
             country_code: 'US',
             postal_code: '95765'
         }
     },
     packages: [{
         description: 'My Package',
         weight: 10
     }]
 }, function(err, res) {
     if (err) {
         return console.log(err);
     }
     console.log(util.inspect(res, { depth: null }));
     // should return an array of rates
 });

 // ups.track('1Z3917XWP290511254', function(err, res) {
 //     if (err) {
 //         return console.log(err);
 //     }

 //     console.log(util.inspect(res, { depth: null }));
 // });

 // ups.confirm({
 //     shipper: {
 //         name: 'Type Foo',
 //         shipper_number: 'R419W8',
 //         address: {
 //             address_line_1: '123 Fake Address',
 //             city: 'Dover',
 //             state_code: 'OH',
 //             country_code: 'US',
 //             postal_code: '44622'
 //         }
 //     },
 //     ship_to: {
 //         company_name: 'Uhsem Blee',
 //         address: {
 //             address_line_1: '3456 Fake Address',
 //             city: 'Charlotte',
 //             state_code: 'NC',
 //             country_code: 'US',
 //             postal_code: '28205'
 //         }
 //     },
 //     packages: [{
 //         description: 'My Package',
 //         weight: 10
 //     }]
 // }, {
 //     transaction_id: 'ABC123',
 //     extra_params: {
 //         Shipment: {
 //             ShipmentServiceOptions: {
 //                 Notification: {
 //                     NotificationCode: '2',
 //                     EMailMessage: {
 //                         EMailAddress: 'hello@myemailaddress.com',
 //                         UndeliverableEMailAddress: 'noreply@myemailaddress.com',
 //                         FromEMailAddress: 'from@myemailaddress.com',
 //                         Memo: 'We thought you might like to know',
 //                         Subject: 'Your package has shipped from our store'
 //                     }
 //                 }
 //             }
 //         }
 //     }
 // }, function(err, res) {
 //     if (err) {
 //         return console.log(err);
 //     }

 //     //console.log(util.inspect(res, {depth: null}));
 //     ups.accept(res.ShipmentDigest, function(err, res) {
 //         if (err) {
 //             return console.log(err);
 //         }

 //         fs.writeFile('./label.gif', new Buffer(res.ShipmentResults.PackageResults.LabelImage.GraphicImage, "base64"), function(err) {
 //             ups.void(res.ShipmentResults.ShipmentIdentificationNumber, function(err, res) {
 //                 // {shipment_identification_number: '1Z648616E192760718'}
 //                 if (err) {
 //                     return console.log(err);
 //                 }

 //                 console.log(util.inspect(res, { depth: null }));
 //             })
 //         });
 //     });
 // });
