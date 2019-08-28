<template>
    <div class="home">
        <v-container grid-list-md fluid>
            <!-- Section 1 - Informations -->
            <v-layout>
                <v-flex xs12>
                    <Section icon="info" title="Informations">
                        <div class="text-container">
                            On this site you can discover my University projects and personal
                            projects.
                        </div>
                    </Section>
                </v-flex>
            </v-layout>
            <!-- Section 1.2 - Certificates -->
            <v-layout>
                <v-flex xs12>
                    <Section icon="attach_file" title="Certificates">
                        <div class="text-container">
                            <v-layout row wrap>
                                <v-flex xs12 md7>
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on: tooltip }">
                                            <a
                                                href="https://skillshub.isqi.org/jpp8kloi"
                                                target="_blank"
                                                v-on="{ ...tooltip }"
                                            >
                                                <v-img
                                                    alt="Certificate image"
                                                    src="https://images.credential.net/embed/jpp8kloi.png"
                                                    width="100%"
                                                >
                                                </v-img>
                                            </a>
                                        </template>
                                        <span>
                                            <v-icon size="15px">link</v-icon> Visit my
                                            <i>Skillshub</i> page</span
                                        >
                                    </v-tooltip>
                                </v-flex>
                                <v-flex xs12 md5>
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on: tooltip }">
                                            <a
                                                href="https://skillshub.isqi.org/jpp8kloi"
                                                target="_blank"
                                                v-on="{ ...tooltip }"
                                            >
                                                <v-img
                                                    alt="Certificate logo"
                                                    src="https://s3.amazonaws.com/accredible-api-badge/1560852655189240.png"
                                                    width="100%"
                                                >
                                                </v-img>
                                                <!-- src="https://images.credential.net/badge/tiny/jpp8kloi_badge.png" -->
                                            </a>
                                        </template>
                                        <span>
                                            <v-icon size="15px">link</v-icon> Visit my
                                            <i>Skillshub</i> page</span
                                        >
                                    </v-tooltip>
                                </v-flex>
                            </v-layout>
                            <br />

                            <ul>
                                <li>
                                    Visit my <i><b>Skillshub page</b></i> to explore my
                                    certificates:
                                    <p>
                                        <a
                                            href="https://skillshub.isqi.org/profile/renkarra/wallet"
                                            target="_blank"
                                        >
                                            Skillshub Wallet</a
                                        >
                                    </p>
                                </li>
                                <li>
                                    Direct link to my
                                    <i><b>ISTQB® Certified Tester - Foundation Level</b></i>
                                    certificate:
                                    <p>
                                        <a
                                            href="https://skillshub.isqi.org/jpp8kloi"
                                            target="_blank"
                                            >Foundation Level certificate</a
                                        >
                                    </p>
                                </li>
                                <li>
                                    Verify my <i><b>Foundation Level</b></i> certificate in the
                                    <i><b>Successful Candidate Register</b></i
                                    >:
                                    <p>
                                        <a
                                            href="http://scr.istqb.org/?name=Ren%C3%A9+Karra%C3%9F&number=19-CTFL-161723-01&orderBy=relevancy&orderDirection=&dateStart=&dateEnd=&expiryStart=&expiryEnd=&certificationBody=&examProvider=&certificationLevel=&country=&resultsPerPage=10"
                                            target="_blank"
                                            >Successful Candidate Register
                                        </a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </Section>
                </v-flex>
            </v-layout>
            <!-- Section 2 - Personal projects -->
            <v-layout>
                <v-flex xs12>
                    <Section icon="code" title="Personal projects">
                        <v-layout id="text-cards-container" wrap>
                            <!-- Card -->
                            <v-flex id="text-card" xs12 sm6 md4>
                                <ThemeCard
                                    headline="Dark Theme for TUB sites"
                                    content="Dark theme for ISIS-TUB and MOSES-TUB site."
                                    link="https://github.com/dark-theme-styles/Dark-Theme-TUB"
                                    button-text="Go to project"
                                ></ThemeCard>
                            </v-flex>
                            <!-- Card -->
                            <v-flex id="text-card" xs12 sm6 md4>
                                <ThemeCard
                                    headline="Y&D Learning Website V2"
                                    content="Website for Y&D Learning."
                                    link="https://ydlearning.github.io/ydl-v2-front/"
                                    button-text="Visit page"
                                ></ThemeCard>
                            </v-flex>
                            <!-- Card -->
                            <v-flex id="text-card" xs12 sm6 md4>
                                <ThemeCard
                                    headline="Y&D Learning V2 Frontend"
                                    content="Frontend for Y&D Learning V2 made in Vue + Vuetify."
                                    link="https://github.com/ydlearning/ydl-v2-front"
                                    button-text="Go to project"
                                ></ThemeCard>
                            </v-flex>
                            <!-- Card -->
                            <v-flex id="text-card" xs12 sm6 md4>
                                <ThemeCard
                                    headline="Y&D Learning V2 Backend / API"
                                    content="Backend for Y&D Learning V2 made in Django REST framework. "
                                    link="https://github.com/ydlearning/ydl-v2-api"
                                    button-text="Go to project"
                                ></ThemeCard>
                            </v-flex>
                        </v-layout>
                    </Section>
                </v-flex>
            </v-layout>
            <!-- Section 3 - Uni projects -->
            <v-layout>
                <v-flex xs12>
                    <Section icon="code" title="University projects">
                        <v-layout id="text-cards-container" wrap>
                            <!-- Card -->
                            <v-flex id="text-card" xs12 sm6 md4>
                                <ThemeCard
                                    headline="Y&D Learning Website V1"
                                    content="Website for Y&D Learning."
                                    link="https://younganddigitallearning.github.io/ydl-front/"
                                    button-text="Visit page"
                                ></ThemeCard>
                            </v-flex>
                            <!-- Card -->
                            <v-flex id="text-card" xs12 sm6 md4>
                                <ThemeCard
                                    headline="Y&D Learning V1 Frontend"
                                    content="Frontend for Y&D Learning V2 made in Vue."
                                    link="https://github.com/YoungAndDigitalLearning/ydl-front"
                                    button-text="Go to project"
                                ></ThemeCard>
                            </v-flex>
                            <!-- Card -->
                            <v-flex id="text-card" xs12 sm6 md4>
                                <ThemeCard
                                    headline="Y&D Learning V1 Backend / API"
                                    content="Backend for Y&D Learning V2 made in Django REST framework. "
                                    link="https://github.com/YoungAndDigitalLearning/ydl-api"
                                    button-text="Go to project"
                                ></ThemeCard>
                            </v-flex>
                        </v-layout>
                    </Section>
                </v-flex>
            </v-layout>
            <!-- Section 4 - Links -->
            <v-layout>
                <v-flex xs12>
                    <Section icon="link" title="Links">
                        <div class="text-container">
                            <ul>
                                <li>
                                    Visit my <i><b>GitHub</b></i> page for all my projects:
                                    <p>
                                        <a href="https://github.com/Re-Krass" target="_blank"
                                            >visit GitHub page</a
                                        >
                                    </p>
                                </li>
                                <li>
                                    Visit <i><b>Codepen</b></i> page for my code snippets:
                                    <p>
                                        <a href="https://codepen.io/Re-Krass" target="_blank"
                                            >visit Homepage</a
                                        >
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </Section>
                </v-flex>
            </v-layout>
            <!-- Section 5 - Author -->
            <v-layout>
                <v-flex xs12>
                    <Section icon="code" title="Author">
                        <div class="window__content">
                            <v-layout id="users-card" wrap justify-content-center>
                                <v-layout justify-content-center>
                                    <v-flex xs12 offset-xs2 sm12 offset-sm4 offset-md5>
                                        <ImageCard
                                            image-src="https://avatars1.githubusercontent.com/u/38668040"
                                            title-name="Re-Krass"
                                            link-href="https://github.com/Re-Krass"
                                        ></ImageCard>
                                    </v-flex>
                                </v-layout>
                            </v-layout>
                        </div>
                    </Section>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import ThemeCard from "@/components/home/ThemeCard";
import ImageCard from "@/components/home/ImageCard";
import Section from "@/components/Section";
// @ is an alias to /src
export default {
    name: "Home",
    components: { ThemeCard, ImageCard, Section }
};
</script>

<style lang="sass" scoped>
a
	color: #319ae3

.text-container
	padding-left: 20px
	padding-top: 5px

.logo
	display: flex

ul ul li
	padding-bottom: 5px

#text-cards-container
	padding-top: 3px
	padding-left: 10px
	padding-right: 10px
	padding-bottom: 10px

#text-card
	padding-left: 1%
	padding-right: 1%

.image-container
	display: flex

.image
	margin: 20px

::v-deep
	.theme--dark.v-list
		background-color: transparent

	.v-list
		padding: 0

		&__tile
			height: 35px !important
			padding-left: 5px !important
			//border-bottom: 2px solid #c8c8c8
			background-color: #363636
			box-shadow: 0 2px 2px -1px black
			padding-top: 0

			#v-list-tile-avatar
				min-width: 45px

			.text-container
				color: #c8c8c8

			&__title
				color: #ffffff

	.v-btn
		text-transform: none

	.container
		padding: 0

	#img-isis-tub
		border-bottom: 2px solid white

	#icons
		height: 17px
		display: inline-flex
		align-items: center
		justify-content: center
		vertical-align: middle
		padding-right: 5px
</style>
