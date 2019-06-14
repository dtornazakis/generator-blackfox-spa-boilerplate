import Page from 'base-repository-system';

class About extends Page {
	constructor(code = 'about', name = 'About', state) {
		super(code, name, state);
	}

	template() {
		return `
			<section id="${this.code}" class="page page__${this.code}">
				<div class="page__content">
					<aside class="image sidebar">
						<figure>
							<img src="" alt="" title="">
						</figure>
					</aside>
				</div>
			</section>
		`;
	}
}

export default About;
