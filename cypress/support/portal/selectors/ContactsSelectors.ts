export let selectors = {
    contacts: {
        contactUrl: 'Contacts',
        searchInputField: 'input[data-test="search-input"]',
        search: '[data-test="search-button"]',
        nameRow: '[data-field="name"]',
        noContact: '.MuiDataGrid-overlay',
        close: '[data-testid="CloseIcon"]',
        addContact: '[data-test="Add Contact-button"]',
        contactName: 'input[data-test="contactName-input"]',
        email: 'input[data-test="contactEmail-input"]',
        phone: 'input[data-test="contactPhone-input"]',
        isBusinessContactCheckbox: '[data-test="isBusinessContact-checkbox"]',
        isCapricornMemberCheckbox: '[data-test="isCapricornMember-checkbox"]',
        sameAsDeliveryAddressCheckbox: '[data-test="sameAsDeliveryAddress-checkbox"]',
        capricornMember: 'input[data-test="capricornMemberId-input"]',
        paymentType: 'input[data-test="paymentType-input"]',
        cash: '#Cash',
        account: '#Account',
        primaryPeopleTab: '[data-test="Primary People-tab"]',
        PrimaryPeopleFirstname: `[data-test^="primary_person_first_name-"][data-test$="-input-cell"]`,
        PrimaryPeopleLastname: `[data-test^="primary_person_last_name-"][data-test$="-input-cell"]`,
        PrimaryPeopleEmail: `[data-test^="primary_person_email-"][data-test$="-input-cell"]`,
        addrow: '[data-test="add-row-button"]',
        inculdeEmail: '[data-test^="include_in_email"][data-test$="-checkbox"]',
        addressTab: '[data-test="Addresses-tab"]',
        deliveryAddressOption1: '.css-egtwrv > :nth-child(1)',
        addContactButton: '[data-test="submit-button"]',
        msg: '[style="transform: none; transition: transform 600ms cubic-bezier(0, 0, 0.2, 1) 0ms;"] > .MuiAlert-message',
        contactNameValidation: 'Contact Name is a required field',
        ContactNameMaxValidation: 'Contact Name must be at most 255 characters',
        contactEmailValidation: 'Must be a valid email.',
        contactPhoneValidation: 'Invalid phone number format.',
        capriconMemberIDValidation: 'Capricorn Member ID must contain only alphanumeric characters.',
        actionForwardButton: '[data-test="view-button"]',
        edit: '[data-test="Edit-button"]',
        contactValues: ' [data-field="value"]',
        editFirstname: '[data-field="firstName"]',
        editLastname: '[data-field="lastName"]',
        editEmail: '[data-field="email"]',
        archive: '[data-test="Archive-button"]',
        deleteContact: '[data-test="Delete Contact-button"]',
        cancel: 'Cancel',
        onhold: '[data-test="Put On Hold-button"]',
        onholdLabel: '.MuiChip-label',
        removeOnhold: '[data-test="Put On Hold-button"]',
        previousControl: '[data-testid="KeyboardArrowLeftIcon"]',
        nextControl: '[data-testid="KeyboardArrowRightIcon"]',
        pageno: '10',
        totalPagination: '.MuiDataGrid-virtualScrollerRenderZone',
        totalRows: '.MuiDataGrid-row',
        rowsCount: '.MuiTablePagination-displayedRows',
        onlyShowCapricornCheckbox: '[data-test="only_show_capricorn-checkbox"]',
        onlyShowOnHoldCheckbox: '[data-test="only_show_on_hold-checkbox"]',
        filterLabel: ' .MuiChip-label',
        NameFilter: '[aria-label="Name"]',//[data-test="contact_id-input"],
        NameFilterOption: '[data-test="name-0aca75f8-0f76-4252-bb03-dcd6612dedd9-option"]',
        paymentFilter: '[data-test="payment_type-input"]',
        paymentFilterOption: '[data-test="Capricorn-option"] > div',
        paymentTypeFilter: '[data-field="payment_type"]'
    },
};
