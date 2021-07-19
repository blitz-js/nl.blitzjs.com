import {Octokit} from "@octokit/rest"
import {Image, Link} from "blitz"
import {useEffect, useState} from "react"

import {ButtonLink} from "@/components/ButtonLink"
import {Header} from "@/components/Header"
import {Feature} from "@/components/home/Feature"
import {FeatureIcon} from "@/components/home/FeatureIcon"
import {FeatureIconTitle} from "@/components/home/FeatureIconTitle"
import {Footer} from "@/components/home/Footer"
import {Hand} from "@/components/home/Hand"
import {HeroCode} from "@/components/home/HeroCode"
import {StyledLink} from "@/components/home/StyledLink"
import {VideoPlayer} from "@/components/home/VideoPlayer"
import Scrollbar from "@/components/Scrollbar"
import {SocialCards} from "@/components/SocialCards"
import {SponsorPack} from "@/components/SponsorPack"
import {getGitHubFile} from "@/utils/getGitHubFile"

const Home = ({randomContributors}) => {
  const [navIsOpen, setNavIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = navIsOpen ? "hidden" : "unset"
  }, [navIsOpen])

  return (
    <div>
      <SocialCards imageUrl="/social-homepage.png" />
      <div className="overflow-hidden">
        <div>
          <a name="top" aria-hidden>
            {null}
          </a>
          <div className="relative grid grid-cols-1 py-1 md:py-3 gap-y-24 xl:gap-y-44">
            <div className="z-30 text-white col-span-full">
              <Header
                className="px-6 mx-auto max-w-7xl"
                onNavToggle={(isOpen) => {
                  setNavIsOpen(isOpen)
                }}
              />
            </div>
            <div
              className={
                "absolute w-full h-full row-start-1 row-end-5 background-to-video rounded-bl-3xl xl:rounded-bl-4xl bg-gradient-to-b from-purple-mid to-purple-primary dark:from-black dark:to-purple-off-black " +
                (navIsOpen ? "z-20 fixed" : "-z-10")
              }
            ></div>
            <div className="relative -mt-6 text-white col-span-full">
              <div className="grid grid-cols-1 gap-10 px-6 mx-auto max-w-7xl lg:grid-cols-3 xl:grid-cols-2 md:gap-6 xl:-mt-10">
                <div className="z-10 space-y-10 lg:w-full">
                  <h2 className="-mt-8 font-medium text-5xl-squashed lg:-mt-0 font-secondary xl:text-6xl xl:font-medium dark:text-transparent bg-clip-text bg-gradient-to-r from-blue-gradient-white to-blue-gradient-light-blue">
                    Het Fullstack React Framework
                  </h2>
                  <p className="text-lg xl:text-xl xl:font-medium text-off-white lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue xl:w-4/5">
<<<<<<< HEAD
                    Blitz is een framework dat geïnspireerd werd door Ruby on Rails, gebouwd is op
                    Next.js en beschikt over een "Zero API" data layer abstractie die REST/GraphQL
                    overbodig maakt.
=======
                    Blitz is a batteries-included framework that&apos;s inspired by Ruby on Rails,
                    is built on Next.js, and features a &quot;Zero-API&quot; data layer abstraction
                    that eliminates the need for REST/GraphQL.
>>>>>>> 32afb4c025affc54c22369b1a8dceeb337e7c1e6
                  </p>
                  <div className="flex space-x-4">
                    <ButtonLink className="w-2/3 lg:w-auto rounded-tl-xl" href="/docs/get-started">
                      Probeer Blitz in 5 min
                    </ButtonLink>
                    <ButtonLink
                      href="https://github.com/blitz-js/blitz"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline"
                      className="w-1/3 lg:w-auto rounded-r-xl"
                    >
                      GitHub
                    </ButtonLink>
                  </div>
                </div>
                <div className="relative lg:col-span-2 xl:col-span-1">
                  <Hand variant="hero-squiggle" className="lg:hidden -right-6 -top-36" />
                  <Hand variant="hero-rightarm" className="hidden lg:block -left-36 top-32" />
                  <Hand
                    variant="hero-righthand"
                    className="z-20 hidden lg:block -left-4"
                    style={{top: "15.2rem"}}
                  />
                  <Hand
                    variant="hero-leftarm"
                    className="hidden lg:block"
                    style={{top: "30rem", right: "-4.8rem"}}
                  />
                  <Hand
                    variant="hero-lefthand"
                    style={{top: "26.6rem", right: "-2.2em"}}
                    className="z-20 hidden lg:block"
                  />
                  <HeroCode className="z-10" />
                </div>
              </div>
            </div>
            <div className="z-10 px-6 mx-auto space-y-12 text-lg text-center text-white lg:space-y-0 lg:space-x-12 lg:flex lg:text-left max-w-7xl xl:font-mediumxl:text-xl">
              <FeatureIcon icon="layers">
                Met de "Zero-API" data layer kan je{" "}
                <strong>server code rechtstreeks in je componenten importeren</strong> in plaats van
                handmatig API endpoints toe te voegen en de data aan de client-side op te vragen en
                te cachen.
              </FeatureIcon>
              <FeatureIcon icon="lighteningBolt">
                In nieuwe Blitz apps zijn alle{" "}
                <strong>saaie dingen reeds ingesteld voor jou!</strong> Zoals ESLint, Prettier,
                Jest, gebruikersregistratie, login en wachtwoord reset.
              </FeatureIcon>
              <FeatureIcon icon="graphUp">
                Biedt <strong>handige standaardinstellingen en conventies</strong> voor zaken als
                routing, bestandsstructuur en authenticatie, terwijl het ook extreem flexibel is.
              </FeatureIcon>
            </div>
            <div className="grid w-full gap-5 px-6 mx-auto text-white xl:gap-10 max-w-7xl lg:grid-cols-2">
              <Link href="/#" passHref>
                <StyledLink className="flex items-center justify-between pb-1 text-lg border-b border-opacity-50 border-blue-mid lg:col-span-2 font-secondary xl:text-xl">
                  <span>Top video's</span>

                  {/*
                  <span className="flex items-center">
                    <span className="hidden mr-2 lg:block">View News</span>{" "}
                    <BsArrowRight size="1.5rem" />
                  </span>
                    */}
                </StyledLink>
              </Link>
              <VideoPlayer url="https://www.youtube.com/watch?v=UHyx8MtCVVk" />
              <VideoPlayer url="https://www.youtube.com/watch?v=fIexr5UZfhU" />
            </div>

            <div className="relative w-full mx-auto space-y-10 lg:space-y-20 xl:space-y-36 max-w-7xl">
              <h2 className="px-6 text-3xl font-semibold xl:text-5xl xl:w-1/2">
                Alles wat je nodig hebt voor productie apps
              </h2>
              <div className="w-full">
                <Hand
                  variant="concepts-right"
                  className="hidden lg:block lg:-top-24 lg:-right-96 lg:w-8/12 xl:-top-14"
                />
                <Scrollbar className="lg:hidden" thumbHeight="4px">
                  <div className="grid pb-4 ml-6 features-grid lg:gap-y-14">
                    <Feature title="Fullstack & monolithisch">
                      <p>
                        Bevat alles van de database tot je frontend in één app. Er is maar één ding
                        om te ontwikkelen. Maar één ding om uit te rollen.
                      </p>
                      <p>En je kunt het op een server of serverless uitrollen.</p>
                    </Feature>
                    <Feature title="Geen API nodig">
                      <p>
                        In plaats van data uit de backend op te halen, importeer je je servercode
                        rechtstreeks in je componenten. Tijdens het compileren wordt die
                        functie-import vervangen door een automatisch gegenereerde HTTP API.
                      </p>
                      <p>De gegenereerde API kan ook worden gebruikt door apps en derden.</p>
                    </Feature>
                    <Feature title="Losse opinies">
                      <p>
                        De out-of-the-box ervaring begeleidt je op een pad dat perfect is voor de
                        meeste applicaties. Maar als je buiten de gebaande paden wilt treden, ben je
                        volledig vrij om dat te doen.
                      </p>
                      <p>
<<<<<<< HEAD
                        En bijna alles is pluggable. We bepalen bijvoorbeeld niet welke styling of
                        form libraries je gebruikt.
=======
                        And nearly everything is pluggable. For example, we don&apos;t mandate which
                        styling or form libraries you use.
>>>>>>> 32afb4c025affc54c22369b1a8dceeb337e7c1e6
                      </p>
                    </Feature>
                    <Feature title="Conventie over configuratie">
                      <p>
                        Blitz doet al de saaie setup en configuratie voor je. De gemeenschappelijke
                        projectstructuur en architectuurpatronen maken het gemakkelijk om van de ene
                        Blitz app naar de andere te gaan en je meteen thuis te voelen.
                      </p>
                    </Feature>
                    <Feature title="Eenvoudig starten en opschalen">
                      <p>
                        Gemakkelijk voor beginners en gemakkelijk om bestaande Next.js apps naar
                        Blitz te migreren.
                      </p>
                      <p>
                        Eenvoudig schaalbaar in alle vormen: lijnen code, aantal mensen dat in de
                        codebase werkt en uitvoering van de code.
                      </p>
                    </Feature>
                    <Feature title="Stabiliteit">
                      <p>
<<<<<<< HEAD
                        Zodra we versie 1.0 hebben bereikt, schakelen we over naar een stabiele,
                        voorspelbare release cycle met meerdere kanalen, zoals stable, LTS en beta.
=======
                        Once we reach version 1.0, we&apos;ll switch to a stable, predictable
                        release cycle with multiple channels like stable, LTS, and beta.
>>>>>>> 32afb4c025affc54c22369b1a8dceeb337e7c1e6
                      </p>
                      <p>We halen in dit opzicht veel inspiratie uit Ember.</p>
                    </Feature>
                  </div>
                </Scrollbar>
              </div>
            </div>
            <div className="absolute w-full h-full row-start-6 lg:h-codesandbox lg:mt-80 row-end-10 rounded-bl-3xl rounded-tr-3xl lg:rounded-bl-4xl lg:rounded-tr-4xl bg-gradient-to-b from-purple-mid to-purple-primary dark:from-purple-off-black dark:to-black"></div>
            <div className="relative hidden w-full px-6 mx-auto space-y-10 max-w-7xl lg:block">
              <h3 className="pb-1 text-xs border-b border-opacity-50 font-secondary border-blue-mid">
                Blitz CodeSandbox voorbeeld
              </h3>
              <div>
                <Hand variant="sandbox-right" style={{right: "-13.2rem", bottom: "-35rem"}} />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://codesandbox.io/s/flamboyant-meninsky-j63yq?file=/app/projects/mutations/createProject.ts"
                  className="h-sandbox xl:h-xl-sandbox block relative"
                >
<<<<<<< HEAD
                  <Image src="/img/sandbox-pic.png" layout="fill" className="object-cover" />
                  <div className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-70 flex items-center justify-center text-white text-5xl font-bold">
                    Klik om in een nieuwe tab te openen
=======
                  <Image
                    src="/img/sandbox-pic.png"
                    layout="fill"
                    className="object-cover"
                    alt="Codesandbox placeholder"
                  />
                  <div className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-70 flex items-center justify-center text-white text-6xl font-bold">
                    Click to Open in New Tab
>>>>>>> 32afb4c025affc54c22369b1a8dceeb337e7c1e6
                  </div>
                </a>
              </div>
            </div>
            <div className="xl:hidden">{/*spacer div*/}</div>
            <div className="relative flex flex-col px-6 mx-auto text-white lg:flex-row max-w-7xl space-y-14 lg:space-x-24 lg:space-y-0 xl:space-x-40">
              <div className="space-y-14 lg:w-1/2">
                <h2 className="z-10 font-medium text-transparent text-5xl-squashed font-secondary bg-clip-text bg-gradient-to-r from-blue-gradient-white to-blue-gradient-light-blue xl:text-6xl">
                  De Blitz Community - Ons belangrijkste aspect
                </h2>
                <div className="z-10 grid grid-cols-5 gap-1 md:grid-cols-6 lg:grid-cols-5 grid-rows-8 overflow-clip">
                  {randomContributors.map((contributor, i) => (
                    <a
                      href={`https://github.com/${contributor.login}`}
                      key={i}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        layout="intrinsic"
                        width="100%"
                        height="100%"
                        src={contributor.avatar_url}
                        alt={contributor.name}
                        title={contributor.name}
                        className="w-full"
                      />
                    </a>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 text-lg lg:relative gap-14 md:grid-cols-2 lg:row-span-2 lg:grid-cols-1 xl:text-xl lg:w-1/2">
                <Hand variant="community-squiggle" className="xl:hidden -right-18" />
                <div className="z-10 flex flex-col justify-between space-y-6 lg:justify-end">
                  <div className="flex flex-col space-y-6 lg:h-auto lg:text-transparent text-off-white">
                    <p className="lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue lg:bg-clip-text">
                      Onze community is warm, veilig, divers, inclusief en leuk! Vooral LGBTQ+,
                      vrouwen en minderheden zijn welkom.
                    </p>
                    <p className="lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue lg:bg-clip-text">
                      Lees onze{" "}
                      <Link href="/docs/code-of-conduct" passHref>
                        <StyledLink className="underline text-off-white hover:text-blue-light">
                          gedragscode
                        </StyledLink>
                      </Link>
                      .
                    </p>
                  </div>
                  <ButtonLink
                    href="https://discord.blitzjs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-bl-none rounded-xl lg:w-max"
                  >
                    Neem deel aan onze Discord Community
                  </ButtonLink>
                </div>
                <div className="z-10 flex flex-col justify-between space-y-6 lg:justify-start">
                  <div className="flex flex-col space-y-6 lg:h-auto lg:text-transparent text-off-white lg:bg-clip-text lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue">
                    <p className="lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue lg:bg-clip-text">
                      We maken hier allemaal samen deel van uit, van de jongste tot de oudste. We
                      lijken allemaal meer op elkaar dan dat we verschillend zijn. We houden ervan
                      om samen te werken.
                    </p>
                    <p className="lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue lg:bg-clip-text">
<<<<<<< HEAD
                      We nodigen je uit om van Blitz het beste framework te maken dat we ooit hebben
                      gehad!
=======
                      We invite you to help make Blitz the best framework we&apos;ve ever had!
>>>>>>> 32afb4c025affc54c22369b1a8dceeb337e7c1e6
                    </p>
                  </div>
                  <Link href="/docs/contributing" passHref>
                    <ButtonLink className="rounded-bl-none rounded-xl lg:w-max">
                      Leer hoe je kan bijdragen
                    </ButtonLink>
                  </Link>
                </div>
              </div>
            </div>
            <div className="z-10 w-full mx-auto text-white space-y-7 max-w-7xl">
              <h2 className="px-6 text-2xl font-medium text-white font-secondary lg:text-3xl">
                Architectuurschema
              </h2>
              <div className="w-full">
                <Scrollbar className="lg:hidden" thumbHeight="4px" thumbColor="white">
                  <div className="px-6 architecture-diagram" style={{paddingBottom: "2px"}}>
                    <img src="img/architecture.svg" alt="Architecture diagram" />
                  </div>
                </Scrollbar>
              </div>
            </div>
            <div className="relative col-span-full">
              <Hand variant="features-squiggle" className="-right-6 -top-10 xl:hidden -z-10" />
            </div>
            <div className="absolute w-full h-full row-start-8 row-end-19 xl:row-end-19 -z-20 bg-purple-mid dark:bg-purple-off-black"></div>
            <div className="relative px-6 mx-auto my-6 space-y-12 text-white xl:my-0 max-w-7xl xl:space-y-36">
              <h2 className="text-3xl font-semibold lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue xl:text-5xl">
                Alles end-to-end van <br className="hidden xl:block" /> de database tot de frontend
              </h2>
              <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3">
                <Hand
                  variant="features-right"
                  className="hidden xl:block xl:-top-40 xl:-right-52"
                />
                <FeatureIconTitle icon="thumbsUp" title="Authenticatie & autorisatie">
                  De ingebouwde authenticatie is supergemakkelijk en zeer veilig. Werkt met elke
                  identiteitsprovider, inclusief zelf gehoste gebruikersnaam en wachtwoord en derden
                  zoals Auth0.
                </FeatureIconTitle>
                <FeatureIconTitle icon="database" title="Database agnostisch">
                  Je kan elke database gebruiken die je wilt. Prisma 2 is de standaard database
                  client, maar je kan deze verwijderen en iets anders gebruiken, zoals Fauna of
                  DynamoDB.
                </FeatureIconTitle>
                <FeatureIconTitle icon="fileCode" title="Recipes">
                  Eén commando om code en/of packages in je Blitz app te installeren. Voorbeelden:
                  `blitz install tailwind` of` blitz install chakra-ui`. Recipes kunnen door
                  iedereen worden gemaakt.
                </FeatureIconTitle>
                <FeatureIconTitle icon="plugin" title="Backend architectuur">
                  Blitz is opgezet voor serverintensieve taken zoals het verzenden van e-mails, cron
                  jobs, achtergrondverwerking, het genereren van PDF's, etc. Momenteel hebben we
                  minimale backend gidsen, maar we werken aan het ontwikkelen van meer patronen en
                  het toevoegen van meer documentatie.
                </FeatureIconTitle>
                <FeatureIconTitle icon="typescript" title="First class Typescript ondersteuning">
                  Blitz is gebouwd met Typescript en de Blitz data layer is volledig end-to-end
                  typesafe. Alle types zijn volledig statisch zonder dat er een apart proces voor
                  het genereren van types nodig is!
                </FeatureIconTitle>
                <FeatureIconTitle icon="scaffolding" title="Codegeneratie">
                  Het staat nog in de kinderschoenen, maar Blitz codegeneratie wordt buitengewoon
                  krachtig. Geweldig voor zowel prototyping als voor het bouwen van echte apps. Je
                  zal in staat zijn om elke template te overschrijven en aan te passen voor jouw
                  project.
                </FeatureIconTitle>
              </div>
            </div>
            <div className="absolute w-full h-full bg-white dark:bg-black row-start-11 row-end-13 rounded-tr-3xl xl:rounded-tr-4xl -z-10" />
            <div className="relative col-span-full">
              <Hand
                variant="sponsors-squiggle"
                className="-right-24 xl:hidden"
                style={{top: "-5.3rem"}}
              />
            </div>
            <div className="px-6 mx-auto text-center max-w-7xl ">
              <div className="space-y-7 xl:space-y-10">
                <h2 className="relative text-3xl font-semibold xl:text-5xl">
                  <Hand
                    variant="sponsors-left"
                    className="hidden xl:block -left-80 pointer-events-none"
                    style={{top: "-18.05rem"}}
                  />
                  Onze sponsors
                </h2>
                <p className="text-lg xl:text-xl">
                  Jullie financiële bijdragen helpen ervoor te zorgen dat Blitz verder wordt
                  ontwikkeld <br className="hidden lg:block" /> en onderhouden! We hebben
                  maandelijkse sponsoropties vanaf $5/maand.
                </p>
                <div>
                  <ButtonLink
                    variant="solid-dark"
                    href="https://github.com/sponsors/blitz-js"
                    className="mx-auto rounded-bl-none rounded-xl lg:w-max md:w-1/3 lg:m-auto lg:mt-4 xl:mt-18"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Steun Blitz
                  </ButtonLink>
                </div>
              </div>

              <div className="xl:max-w-2xl mx-auto">
                <SponsorPack />
              </div>
            </div>

            <div className="w-full px-6 mx-auto space-y-12 text-white lg:space-x-4 lg:space-y-0 lg:flex lg:items-center max-w-7xl">
              <h2 className="pr-2 text-3xl font-semibold lg:w-full lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue xl:text-5xl">
                Wat kan ik nu doen?
              </h2>
              <div className="flex flex-col w-full space-y-4 md:flex-row md:space-y-0 md:space-x-2">
                <ButtonLink
                  href="/docs/get-started"
                  className="w-full text-lg py-18 rounded-t-2xl md:rounded-tr-none"
                >
                  Probeer Blitz in 5 min
                </ButtonLink>
                <ButtonLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://discord.blitzjs.com"
                  className="w-full text-lg py-18 rounded-br-2xl md:rounded-tr-2xl"
                >
                  Neem deel op Discord
                </ButtonLink>
              </div>
            </div>
            <Footer className="dark:bg-purple-off-black bg-purple-mid text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

const getStaticProps = async () => {
  const MAX_CONTRIBUTORS = 30

  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN,
  })

  const {contributors} = await getGitHubFile({
    octokit,
    owner: "blitz-js",
    repo: "blitz",
    path: ".all-contributorsrc",
    json: true,
  })

  let randomIndexes = []
  while (randomIndexes.length < MAX_CONTRIBUTORS) {
    var r = Math.floor(Math.random() * contributors.length)
    if (randomIndexes.indexOf(r) === -1) randomIndexes.push(r)
  }

  let randomContributors = randomIndexes.map((i) => contributors[i])

  return {
    props: {randomContributors},
    revalidate: 60 * 30, // 30 minutes
  }
}

Home.meta = {
  title: "Blitz.js - Het Fullstack React Framework",
  description: `Blitz is een hyperproductief fullstack React-framework dat is gebouwd op Next.js en beschikt over een "Zero-API" data layer.`,
}

export default Home
export {getStaticProps}
