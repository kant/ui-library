import BaseSubmissionObject from './BaseSubmissionObject.js';

export default {
	id: 'ExampleSubmissionsListPanel',
	searchPhrase: '',
	isLoading: false,
	isOrdering: false,
	isFilterVisible: false,
	count: 3,
	offset: 0,
	apiPath: '',
	getParams: {},
	activeFilters: {},
	filters: {
		attention: {
			filters: [
				{
					title: 'Overdue',
					param: 'isOverdue',
					val: true,
				},
				{
					title: 'Incomplete',
					param: 'isIncomplete',
					val: true,
				},
			],
		},
		stageIds: {
			heading: 'Stages',
			filters: [
				{
					title: 'Submission',
					param: 'stageIds',
					val: 1,
				},
				{
					title: 'Review',
					param: 'stageIds',
					val: 3,
				},
				{
					title: 'Copyediting',
					param: 'stageIds',
					val: 4,
				},
				{
					title: 'Production',
					param: 'stageIds',
					val: 5,
				},
			],
		},
	},
	lazyLoad: false,
	_lastGetRequest: null,
	items: [
		BaseSubmissionObject,
		{
			...BaseSubmissionObject,
			id: 2,
			fullTitle: {
				en_US: 'Quisque vel ultrices ut vel sollicitudin vel varius suscipit phasellus',
			},
			authorString: 'Catherine Kwantes',
			reviewAssignments: [],
			reviewRounds: [],
			stages: [
				{
					id: 1,
					label: 'Submission',
					isActiveStage: false,
					queries: [],
					files: {
						count: 1,
					},
					currentUserAssignedRoles: [pkp.const.ROLE_ID_MANAGER],
				},
				{
					id: 3,
					label: 'Review',
					isActiveStage: true,
					status: 'Waiting for reviewers to be selected',
					statusId: 6,
					queries: [],
					files: {
						count: 2,
					},
					currentUserAssignedRoles: [pkp.const.ROLE_ID_MANAGER],
				},
				{
					id: 4,
					label: 'Copyediting',
					isActiveStage: false,
					queries: [],
					files: {
						count: 0,
					},
					currentUserAssignedRoles: [pkp.const.ROLE_ID_MANAGER],
				},
				{
					id: 5,
					label: 'Production',
					isActiveStage: false,
					queries: [],
					files: {
						count: 0,
					},
					currentUserAssignedRoles: [pkp.const.ROLE_ID_MANAGER],
				},
			],
			urlWorkflow: '/workflow/access/2',
			urlPublished: '/article/view/2',
			urlAuthorWorkflow: '/authorDashboard/submission/2',
			urlEditorialWorkflow: '/workflow/access/2',
		},
		{
			...BaseSubmissionObject,
			id: 3,
			fullTitle: {
				en_US: 'Metus ut elit est ultrices vivamus mauris est quisque arcu',
			},
			authorString: 'Domatilia Sokoloff',
			urlWorkflow: '/workflow/access/3',
			urlPublished: '/article/view/3',
			urlAuthorWorkflow: '/authorDashboard/submission/3',
			urlEditorialWorkflow: '/workflow/access/3',
			stages: BaseSubmissionObject.stages.map((stage) => {
				if (stage.id === 1) {
					return {
						...stage,
						status: 'No editor has been assigned to this submission.',
						statusId: 1,
					};
				}
				return stage;
			}),
		},
		{
			...BaseSubmissionObject,
			id: 4,
			fullTitle: {
				en_US: 'Current user is assigned as reviewer to this submission',
			},
			reviewAssignments: [
				{
					due: '2025-12-05',
					responseDue: '2017-01-01',
					id: 7,
					isCurrentUserAssigned: true,
					round: 1,
					roundId: 5,
					status: 'The reviewer has missed the response due date.',
					statusId: 4,
				},
			],
			stages: [
				{
					id: 1,
					label: 'Submission',
					isActiveStage: false,
					queries: [],
					files: {
						count: 1,
					},
					currentUserAssignedRoles: [pkp.const.ROLE_ID_MANAGER],
				},
				{
					id: 3,
					label: 'Review',
					isActiveStage: true,
					status: 'Waiting for reviewers to be selected',
					statusId: 6,
					queries: [{
						assocId: 21,
						assocType: 1048585,
						closed: false,
						id: 47,
						sequence: 1,
						stageId: 3,
					}],
					files: {
						count: 2,
					},
					currentUserAssignedRoles: [pkp.const.ROLE_ID_MANAGER],
				},
				{
					id: 4,
					label: 'Copyediting',
					isActiveStage: false,
					queries: [],
					files: {
						count: 0,
					},
					currentUserAssignedRoles: [pkp.const.ROLE_ID_MANAGER],
				},
				{
					id: 5,
					label: 'Production',
					isActiveStage: false,
					queries: [],
					files: {
						count: 0,
					},
					currentUserAssignedRoles: [pkp.const.ROLE_ID_MANAGER],
				},
			],
			urlWorkflow: '/reviewer/submission/4',
			urlPublished: '/article/view/4',
			urlAuthorWorkflow: '/authorDashboard/submission/4',
			urlEditorialWorkflow: '/workflow/access/4',
		},
		{
			...BaseSubmissionObject,
			id: 5,
			fullTitle: {
				en_US: 'Sed sed mattis amet eget aenean leo est nam sit',
			},
			authorString: 'Sed Aenean',
			stages: [
				{
					id: 1,
					label: 'Submission',
					isActiveStage: false,
					queries: [],
					files: {
						count: 1,
					},
					currentUserAssignedRoles: [pkp.const.ROLE_ID_MANAGER],
				},
				{
					id: 3,
					label: 'Review',
					isActiveStage: false,
					status: 'Waiting for reviewers to be selected',
					statusId: 6,
					queries: [],
					files: {
						count: 1,
					},
					currentUserAssignedRoles: [pkp.const.ROLE_ID_MANAGER],
				},
				{
					id: 4,
					label: 'Copyediting',
					isActiveStage: true,
					queries: [{
						assocId: 21,
						assocType: 1048585,
						closed: false,
						id: 47,
						sequence: 1,
						stageId: 4,
					}],
					files: {
						count: 2,
					},
					currentUserAssignedRoles: [pkp.const.ROLE_ID_MANAGER],
				},
				{
					id: 5,
					label: 'Production',
					isActiveStage: false,
					queries: [],
					files: {
						count: 0,
					},
					currentUserAssignedRoles: [pkp.const.ROLE_ID_MANAGER],
				},
			],
			urlWorkflow: '/workflow/access/5',
			urlPublished: '/article/view/5',
			urlAuthorWorkflow: '/authorDashboard/submission/5',
			urlEditorialWorkflow: '/workflow/access/5',
		},
		{
			...BaseSubmissionObject,
			id: 6,
			fullTitle: {
				en_US: 'Lacus ut leo dolor nam neque nam dolor aenean sagittis',
			},
			authorString: 'Lacus Agittis',
			stages: [
				{
					id: 1,
					label: 'Submission',
					isActiveStage: false,
					queries: [],
					files: {
						count: 1,
					},
					currentUserAssignedRoles: [pkp.const.ROLE_ID_MANAGER],
				},
				{
					id: 3,
					label: 'Review',
					isActiveStage: false,
					status: 'Waiting for reviewers to be selected',
					statusId: 6,
					queries: [],
					files: {
						count: 1,
					},
					currentUserAssignedRoles: [pkp.const.ROLE_ID_MANAGER],
				},
				{
					id: 4,
					label: 'Copyediting',
					isActiveStage: false,
					queries: [],
					files: {
						count: 1,
					},
					currentUserAssignedRoles: [pkp.const.ROLE_ID_MANAGER],
				},
				{
					id: 5,
					label: 'Production',
					isActiveStage: true,
					queries: [{
						assocId: 21,
						assocType: 1048585,
						closed: false,
						id: 47,
						sequence: 1,
						stageId: 5,
					}],
					files: {
						count: 4,
					},
					currentUserAssignedRoles: [pkp.const.ROLE_ID_MANAGER],
				},
			],
			urlWorkflow: '/workflow/access/6',
			urlPublished: '/article/view/6',
			urlAuthorWorkflow: '/authorDashboard/submission/6',
			urlEditorialWorkflow: '/workflow/access/6',
		},
	],
	itemsMax: 10,
	i18n: {
		id: 'ID',
		title: 'Submissions',
		add: 'New Submission',
		search: 'Search',
		itemsOfTotal: '{$count} of {$total} items',
		itemCount: '{$count} items',
		loadMore: 'Load more',
		loading: 'Loading',
		incomplete: 'Incomplete',
		delete: 'Delete',
		infoCenter: 'Activity Log & Notes',
		yes: 'Yes',
		no: 'No',
		deleting: 'Deleting',
		currentStage: 'Currently in the {$stage} stage.',
		confirmDelete: 'Delete submission?',
		responseDue: 'Response due',
		reviewDue: 'Review due',
		filter: 'Filter',
		filterRemove: 'Clear filter: {$filterTitle}',
		itemOrdererUp: 'Increase position of {$itemTitle}',
		viewSubmission: 'View Submission',
		reviewsCompleted: 'Assigned reviews completed',
		revisionsSubmitted: 'Revisions submitted',
		copyeditsSubmitted: 'Copyedited files submitted',
		filesPrepared: 'Files prepared',
		discussions: 'Open discussions',
		assignEditor: 'Assign Editor',
		galleysCreated: 'Production galleys created',
		dualWorkflowLinks: 'You have been assigned multiple roles for this submission. Would you like to access the <a href="{$urlAuthorWorkflow}">Author\'s workflow</a>  or the <a href="{$urlEditorialWorkflow}">Editorial workflow</a>?',
		reviewerWorkflowLink: 'You have been assigned an editorial role for this submission. Would you like to access the <a href="{$urlEditorialWorkflow}">Editorial workflow</a>?',
		viewMore: 'View more details about {$name}',
		viewLess: 'Hide expanded details about {$name}',
	},
	addUrl: '/submission/wizard',
	infoUrl: '/$$$call$$$/information-center/submission-information-center/view-information-center?submissionId=__id__',
	assignParticipantUrl: '/$$$call$$$/grid/users/stage-participant/stage-participant-grid/add-participant?submissionId=__id__&stageId=__stageId__',
};
