// function vaccine(dosage) {
//   if (dosage > 0) {
//     inject(dosage);
//   }
// }
//
// administer(patient, dosage, time);

administer(
  patient,
  function(dosage) { if (dosage > 0) {  inject(dosage); }},
  time
);
