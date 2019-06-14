export const ContactFormFields = [
	{
		classList: 'user',
		name: 'fullname',
		placeholder: 'Ονοματεπώνυμο',
		title: 'Ονοματεπώνυμο',
		type: 'text',
		required: false,
		validations: []
	},
	{
		classList: 'phone',
		help: 'Έγκυρες τιμές τηλεφώνου: 2107878788 ή με πρόθεμα χώρας: +302107878788',
		name: 'phone',
		placeholder: 'π.χ. 2107878788',
		title: 'Τηλέφωνο',
		type: 'tel',
		required: false,
		pattern: '^([+]{1}[0-9]{2})?[0-9]{10}',
		validations: [
			{
				type: 'pattern',
				message: 'Μη έγκυρος αριθμός τηλεφώνου'
			}
		]
	},
	{
		classList: 'email',
		name: 'email',
		pattern: '^[^@]+@[^.@]+.[^.@]+',
		placeholder: 'π.χ. info@domain.com',
		title: 'Email',
		type: 'email',
		required: true,
		validations: [
			{
				type: 'required',
				message: 'Συμπληρώστε την διεύθυνση email'
			},
			{
				type: 'pattern',
				message: 'Μη έγκυρη διεύθυνση email'
			}
		]
	},
	{
		classList: 'dropdown',
		data: [
			{ value: '', text: 'Θέμα...'}, // disabled selected
			{ value: 'faq', text: 'Ερώτηση' },
			{ value: 'clarification', text: 'Διευκρίνηση'},
			{ value: 'complaint', text: 'Παράπονο'},
			{ value: 'proposal', text: 'Πρόταση'},
			{ value: 'other', text: 'Άλλο' }
		],
		name: 'subject',
		placeholder: 'Θέμα...',
		title: 'Θέμα',
		type: 'select',
		required: true,
		validations: [
			{
				type: 'required',
				message: 'Επιλέξτε μια τιμή απο τη λίστα'
			}
		]
	},
	{
		classList: 'message cmp-contact-form__field--fullsize',
		name: 'message',
		placeholder: 'Το μήνυμά σας',
		title: 'Μήνυμα',
		type: 'textarea',
		required: true,
		validations: [
			{
				type: 'required',
				message: 'Εισάγετε μήνυμα επικοινωνίας'
			}
		]
	}
];
