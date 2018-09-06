import gql from 'graphql-tag'



export const QUERY_ALL_STATIC_CONTENT = gql`
{
	allEducations {
		_id
		organization
		city
		state
		degree
		time
		order
		image
		desc
		style {
			primaryColor
			secondaryColor
			bannerImage
		}
	}

	allExperiences {
		_id
		organization
		city
		state
		title
		time
		desc
		image
		order
		style {
			primaryColor
			secondaryColor
			bannerImage
		}
	}

	allPortfolios {
		_id
		title
		logo
		time
		desc
		keywords
		categories
		links
		order
		style {
			primaryColor
			secondaryColor
		}
	}

	allSkillCategories {
		_id
		categoryTitle
		order
		color
		skills {
			_id
			skillName
			percent
		}
	}
}
`

export const SEND_EMAIL = gql`
	mutation SendEmail($name: String!, $fromEmail: String!, $subject: String, $textBody: String!) {
		sendEmail(
			name: $name
			fromEmail: $fromEmail
			subject: $subject
			textBody: $textBody
		)
	}
`
