<script>
import SelectReviewerListPanel from '@/components/SelectListPanel/users/SelectReviewerListPanel.vue';
import BaseReviewerObject from '@/docs/examples/SelectListPanel/implementations/helpers/BaseReviewerObject.js';

let yesterday = new Date();
yesterday.setDate(new Date().getDate() - 1);

export default {
	extends: SelectReviewerListPanel,
	name: 'ExampleSelectReviewerListPanel',
	data: function () {
		return {
			id: 'ExampleSelectReviewerListPanel',
			inputName: 'exampleSelectReviewer',
			inputType: 'radio',
			currentlyAssigned: [5],
			warnOnAssignment: [7],
			items: [
				BaseReviewerObject,
				{
					...BaseReviewerObject,
					id: 2,
					fullName: 'Allison Ackerman',
					reviewsActive: 0,
					reviewsCompleted: 0,
					dateLastReviewAssignment: '',
					reviewerRating: null,
					interests: [],
				},
				{
					...BaseReviewerObject,
					id: 3,
					fullName: 'Aisla McCrae',
					reviewsActive: 23,
					reviewsCompleted: 32,
					dateLastReviewAssignment: '2017-12-31 11:22:42',
					reviewerRating: 5,
					orcid: 'http://orcid.org/0000-0002-1825-0097',
					biography: {
						en_US: '<p>Professor Aisla McCrae is a senior research fellow in the Publishing Studies Department in the School of Publishing at the University of Manitoba. She is the deputy chair of the Manitoba Publishing Institute and the author of <em>Publishing Now and Forever: Recent Developments in Archival Permanence</em>.</p>',
					},
					gossip: "<p>Aisla is a terrific reviewer but she takes a while to confirm and complete a review. Recommend not using her if you're on a tight deadline.</p>",
				},
				{
					...BaseReviewerObject,
					id: 4,
					fullName: 'Ahmed Maliki',
					reviewsActive: 0,
					reviewsCompleted: 2,
					dateLastReviewAssignment: yesterday.toString(),
					reviewerRating: 4,
					interests: [
						{
							id: 223,
							interest: 'catapulting into space',
						},
						{
							id: 224,
							interest: 'somersaults around the moon',
						},
						{
							id: 225,
							interest: 'listening to taylor swift',
						},
						{
							id: 227,
							interest: 'growing plants and stuff',
						},
						{
							id: 226,
							interest: 'just kickin it',
						},
					],
				},
				{
					...BaseReviewerObject,
					id: 5,
					fullName: 'Adela Gallego',
					reviewsActive: 1,
					reviewsCompleted: 0,
					dateLastReviewAssignment: '2018-01-25 11:22:42',
					reviewerRating: 5,
				},
				{
					...BaseReviewerObject,
					id: 6,
					fullName: 'Habiba Yousef',
					reviewsActive: 1,
					reviewsCompleted: 0,
					dateLastReviewAssignment: '2017-06-07 11:22:42',
					reviewerRating: 3,
				},
				{
					...BaseReviewerObject,
					id: 7,
					fullName: 'Matthew McMatherson',
					reviewsActive: 0,
					reviewsCompleted: 3,
					dateLastReviewAssignment: '2017-10-21 11:22:42',
					reviewerRating: 2,
				},
			],
			itemsMax: 10,
			i18n: {
				title: 'Example Select Reviewer List',
				search: 'Search',
				itemsOfTotal: '{$count} of {$total} items',
				itemCount: '{$count} items',
				loadMore: 'Load more',
				loading: 'Loading',
				filter: 'Filter',
				filterAdd: 'Add filter: {$filterTitle}',
				filterRemove: 'Clear filter: {$filterTitle}',
				filterRating: 'Rated at least',
				lessThan: '{$value} or less',
				moreThan: '{$value} or more',
				activeReviews: '{$count} active',
				activeReviewsDescription: 'Active reviews currently assigned',
				completedReviews: 'Reviews completed',
				reviewerRating: 'Reviewer rating: {$rating}',
				daysSinceLastAssignment: '{$days} days ago',
				daySinceLastAssignment: 'Yesterday',
				daysSinceLastAssignmentDescription: 'Days since last review assigned',
				averageCompletion: 'Average days to complete review',
				neverAssigned: 'Never assigned',
				currentlyAssigned: 'This reviewer has already been assigned to review this submission.',
				warnOnAssign: "This reviewer is locked because they have been assigned a role which allows them to view the author's identity. Blind peer review can not be guaranteed. Would you like to unlock this reviewer anyway?",
				warnOnAssignUnlock: 'Unlock',
				reviewInterests: 'Reviewing Interests',
				gossip: 'Editorial Notes',
				biography: 'Biography',
				listSeparator: ', ',
				viewMore: 'Show more details about {$name}',
				viewLess: 'Hide expanded details about {$name}',
			},
		};
	},
};
</script>
