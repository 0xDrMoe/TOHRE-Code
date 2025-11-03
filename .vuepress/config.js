import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  bundler: viteBundler(),
  cleanUrls: true,
  theme: defaultTheme({
    locales: {
      '/': {
        selectLanguageName: 'English',
        home: '/',
        logo: './logo.png',
        logoAlt: 'TOHE',
        navbar: [
          {
            text: 'Roles',
            children: [
              {
                text: 'All Roles',
                link: '/Roles.html',
              },
              {
                text: 'Impostor Roles',
                link: '/options/Settings/Impostors.html',
              },
              {
                text: 'Crewmate Roles',
                link: '/options/Settings/Crewmates.html',
              },
              {
                text: 'Neutral Roles',
                link: '/options/Settings/Neutrals.html',
              },
              {
                text: 'Coven Roles',
                link: '/options/Settings/Coven.html',
              },
              {
                text: 'Add-ons',
                link: '/options/Settings/Addons.html',
              },
              {
                text: 'Game Settings',
                link: '/options/Settings/Game.html',
              },
              {
                text: 'System Settings',
                link: '/options/Settings/System.html',
              },
              {
                text: 'Mod Settings',
                link: '/options/Settings/Mod.html',
              },
            ]
          },
          {
            text: 'About',
            link: '/AboutUs.html',
          },
          {
            text: 'Guide',
            children: [
              {
                text: 'Guide to TOHE',
                link: '/Guide.html',
              },
              {
                text: 'Welcome',
                link: '/guides/Welcome.html',
              },
              {
                text: 'Installation',
                link: '/guides/Installation.html',
              },
              {
                text: 'Setup',
                link: '/guides/Setup.html',
              },
              {
                text: 'Updating',
                link: '/guides/Updating.html',
              },
              {
                text: 'Features',
                link: '/guides/Features.html',
              },
              {
                text: 'Presets',
                link: '/guides/Presets.html',
              },
              {
                text: 'TOHE-Data',
                link: '/guides/TOHEData.html',
              },
              {
                text: 'Templates',
                link: '/guides/Templates.html',
              },
              {
                text: 'Tags',
                link: '/guides/Tags.html',
              },
              {
                text: 'Gamemodes',
                link: '/guides/Gamemodes.html',
              },
              {
                text: 'Troubleshooting',
                link: '/Troubleshooting.html',
              },
            ]
          },
          {
            text: 'FAQ',
            link: '/FAQ.html',
          },
          {
            text: 'Changelogs',
            link: '/Changelogs.html',
          },
          {
            text: 'Resources',
            link: '/Resources.html',
          },
          {
            text: 'Modded Servers',
            link: '/servers.html',
          },
          {
            text: 'User Submitted Content',
            link: '/USC.html',
          },
        ],
        sidebar: {
          '/guides/': [
            { text: 'Guide to TOHE', link: '/Guide.html' },
            { text: 'Welcome to TOHE', link: '/guides/Welcome.html' },
            {
              text: 'Installing TOHE', link: '/guides/Installation.html', children: [
                { text: 'Steam Installation', link: '/guides/install/Steam.html' },
                { text: 'Epic Games Installation', link: '/guides/install/EpicGames.html' },
                { text: 'Xbox App Installation', link: '/guides/install/XboxApp.html' },
                { text: 'Thunderstore/r2modman Installation', link: '/guides/install/Thunderstore.html' },
                { text: 'Mod Manager Installation', link: '/guides/install/ModManager.html' },
              ]
            },
            { text: 'Setting Up TOHE', link: '/guides/Setup.html' },
            { text: 'Updating TOHE', link: '/guides/Updating.html' },
            { text: 'Prime Features in TOHE', link: '/guides/Features.html' },
            { text: 'All About Presets', link: '/guides/Presets.html' },
            { text: 'All About TOHE-Data', link: '/guides/TOHEData.html' },
            { text: 'All About Templates', link: '/guides/Templates.html' },
            { text: 'All About Tags', link: '/guides/Templates.html' },
            { text: 'All About Gamemodes', link: '/guides/Templates.html' },
          ],
          '/changelogs/': [
            { text: 'Latest Changelogs', link: '/Changelogs.html' },
            { text: 'Changelogs Tags', link: '/changelogs/Tags.html' },
            { text: 'All Stable Changelogs', link: '/changelogs/Stable.html' },
            { text: 'All Beta Changelogs', link: '/changelogs/Beta.html' },
            { text: 'All Alpha Changelogs', link: '/changelogs/Alpha.html' },
          ],
          '/options/Addons/': [
            { text: 'Back to Addons', link: '/options/Settings/Addons.html' },
            {
              text: 'Experimental',
              children: [
                { text: 'Glow', link: '/options/Addons/Experimental/Glow.html' },
                { text: 'Narc', link: '/options/Addons/Experimental/Narc.html' },
                { text: 'Rat', link: '/options/Addons/Experimental/Rat.html' },
                { text: 'Swift', link: '/options/Addons/Experimental/Swift.html' },
              ]
            },
            {
              text: 'Guesser',
              children: [
                { text: 'Double Shot', link: '/options/Addons/Guesser/DoubleShot.html' },
                { text: 'Guesser', link: '/options/Addons/Guesser/Guesser.html' },
                { text: 'Onbound', link: '/options/Addons/Guesser/Onbound.html' },
                { text: 'Rebound', link: '/options/Addons/Guesser/Rebound.html' },
              ]
            },
            {
              text: 'Harmful',
              children: [
                { text: 'Disregarded', link: '/options/Addons/Harmful/Disregarded.html' },
                { text: 'Fool', link: '/options/Addons/Harmful/Fool.html' },
                { text: 'Fragile', link: '/options/Addons/Harmful/Fragile.html' },
                { text: 'Hurried', link: '/options/Addons/Harmful/Hurried.html' },
                { text: 'Influenced', link: '/options/Addons/Harmful/Influenced.html' },
                { text: 'Mundane', link: '/options/Addons/Harmful/Mundane.html' },
                { text: 'Oblivious', link: '/options/Addons/Harmful/Oblivious.html' },
                { text: 'Prohibited', link: '/options/Addons/Harmful/Prohibited.html' },
                { text: 'Rascal', link: '/options/Addons/Harmful/Rascal.html' },
                { text: 'Sloth', link: '/options/Addons/Harmful/Sloth.html' },
                { text: 'Statue', link: '/options/Addons/Harmful/Statue.html' },
                { text: 'Tired', link: '/options/Addons/Harmful/Tired.html' },
                { text: 'Unlucky', link: '/options/Addons/Harmful/Unlucky.html' },
                { text: 'Void Ballot', link: '/options/Addons/Harmful/VoidBallot.html' },
              ]
            },
            {
              text: 'Helpful',
              children: [
                { text: 'Autopsy', link: '/options/Addons/Helpful/Autopsy.html' },
                { text: 'Bait', link: '/options/Addons/Helpful/Bait.html' },
                { text: 'Beartrap', link: '/options/Addons/Helpful/Beartrap.html' },
                { text: 'Bewilder', link: '/options/Addons/Helpful/Bewilder.html' },
                { text: 'Burst', link: '/options/Addons/Helpful/Burst.html' },
                { text: 'Cyber', link: '/options/Addons/Helpful/Cyber.html' },
                { text: 'Eavesdropper', link: '/options/Addons/Helpful/Eavesdropper.html' },
                { text: 'Evader', link: '/options/Addons/Helpful/Evader.html' },
                { text: 'Flash', link: '/options/Addons/Helpful/Flash.html' },
                { text: 'Lazy', link: '/options/Addons/Helpful/Lazy.html' },
                { text: 'Loyal', link: '/options/Addons/Helpful/Loyal.html' },
                { text: 'Lucky', link: '/options/Addons/Helpful/Lucky.html' },
                { text: 'Necroview', link: '/options/Addons/Helpful/Necroview.html' },
                { text: 'Nimble', link: '/options/Addons/Helpful/Nimble.html' },
                { text: 'Overclocked', link: '/options/Addons/Helpful/Overclocked.html' },
                { text: 'Radar', link: '/options/Addons/Helpful/Radar.html' },
                { text: 'Rebirth', link: '/options/Addons/Helpful/Rebirth.html' },
                { text: 'Seer', link: '/options/Addons/Helpful/Seer.html' },
                { text: 'Silent', link: '/options/Addons/Helpful/Silent.html' },
                { text: 'Sleuth', link: '/options/Addons/Helpful/Sleuth.html' },
                { text: 'Spurt', link: '/options/Addons/Helpful/Spurt.html' },
                { text: 'Tiebreaker', link: '/options/Addons/Helpful/Tiebreaker.html' },
                { text: 'Torch', link: '/options/Addons/Helpful/Torch.html' },
                { text: 'Watcher', link: '/options/Addons/Helpful/Watcher.html' },
              ]
            },
            {
              text: 'Impostor',
              children: [
                { text: 'Circumvent', link: '/options/Addons/Impostor/Circumvent.html' },
                { text: 'Clumsy', link: '/options/Addons/Impostor/Clumsy.html' },
                { text: 'Last Impostor', link: '/options/Addons/Impostor/LastImpostor.html' },
                { text: 'Madmate', link: '/options/Addons/Impostor/Madmate.html' },
                { text: 'Mare', link: '/options/Addons/Impostor/Mare.html' },
                { text: 'Mimic', link: '/options/Addons/Impostor/Mimic.html' },
                { text: 'Stealer', link: '/options/Addons/Impostor/Stealer.html' },
                { text: 'Tricky', link: '/options/Addons/Impostor/Tricky.html' },
              ]
            },
            {
              text: 'Miscellaneous',
              children: [
                { text: 'Egoist', link: '/options/Addons/Miscellaneous/Egoist.html' },
                { text: 'Lovers', link: '/options/Addons/Miscellaneous/Lovers.html' },
                { text: 'Rainbow', link: '/options/Addons/Miscellaneous/Rainbow.html' },
                { text: 'Reach', link: '/options/Addons/Miscellaneous/Reach.html' },
                { text: 'Workhorse', link: '/options/Addons/Miscellaneous/Workhorse.html' },
                { text: 'YouTuber', link: '/options/Addons/Miscellaneous/YouTuber.html' },
              ]
            },
            {
              text: 'Mixed',
              children: [
                { text: 'Antidote', link: '/options/Addons/Mixed/Antidote.html' },
                { text: 'Avenger', link: '/options/Addons/Mixed/Avenger.html' },
                { text: 'Aware', link: '/options/Addons/Mixed/Aware.html' },
                { text: 'Bloodthirst', link: '/options/Addons/Mixed/Bloodthirst.html' },
                { text: 'Diseased', link: '/options/Addons/Mixed/Diseased.html' },
                { text: 'Ghoul', link: '/options/Addons/Mixed/Ghoul.html' },
                { text: 'Gravestone', link: '/options/Addons/Mixed/Gravestone.html' },
                { text: 'OIIAI', link: '/options/Addons/Mixed/OIIAI.html' },
                { text: 'Paranoia', link: '/options/Addons/Mixed/Paranoia.html' },
                { text: 'Stubborn', link: '/options/Addons/Mixed/Stubborn.html' },
                { text: 'Susceptible', link: '/options/Addons/Mixed/Susceptible.html' },
              ]
            },
            {
              text: 'Secondary',
              children: [
                { text: 'Admired', link: '/options/Addons/Secondary/Admired.html' },
                { text: 'Charmed', link: '/options/Addons/Secondary/Charmed.html' },
                { text: 'Cleansed', link: '/options/Addons/Secondary/Cleansed.html' },
                { text: 'Contagious', link: '/options/Addons/Secondary/Contagious.html' },
                { text: 'Enchanted', link: '/options/Addons/Secondary/Enchanted.html' },
                { text: 'Evil Spirit', link: '/options/Addons/Secondary/EvilSpirit.html' },
                { text: 'Infected', link: '/options/Addons/Secondary/Infected.html' },
                { text: 'Knighted', link: '/options/Addons/Secondary/Knighted.html' },
                { text: 'Recruit', link: '/options/Addons/Secondary/Recruit.html' },
                { text: 'Soulless', link: '/options/Addons/Secondary/Soulless.html' },
              ]
            }
          ],
          '/options/Coven/': [
            { text: 'Back to Coven', link: '/options/Settings/Coven.html' },
            {
              text: 'Experimental',
              children: [
                { text: 'None', link: '/options/Settings/Coven.html' },
              ]
            },
            {
              text: 'Killing',
              children: [
                { text: 'Conjurer', link: '/options/Coven/Killing/Conjurer.html' },
                { text: 'Hex Master', link: '/options/Coven/Killing/HexMaster.html' },
                { text: 'Jinx', link: '/options/Coven/Killing/Jinx.html' },
              ]
            },
            {
              text: 'Power',
              children: [
                { text: 'Coven Leader', link: '/options/Coven/Power/CovenLeader.html' },
                { text: 'Ritualist', link: '/options/Coven/Power/Ritualist.html' },
              ]
            },
            {
              text: 'Trickery',
              children: [
                { text: 'Dreamweaver', link: '/options/Coven/Trickery/Dreamweaver.html' },
                { text: 'Illusionist', link: '/options/Coven/Trickery/Illusionist.html' },
                { text: 'Poisoner', link: '/options/Coven/Trickery/Poisoner.html' },
              ]
            },
            {
              text: 'Utility',
              children: [
                { text: 'Harvester', link: '/options/Coven/Utility/Harvester.html' },
                { text: 'Medusa', link: '/options/Coven/Utility/Medusa.html' },
                { text: 'Moon Dancer', link: '/options/Coven/Utility/MoonDancer.html' },
                { text: 'Necromancer', link: '/options/Coven/Utility/Necromancer.html' },
                { text: 'Potion Master', link: '/options/Coven/Utility/PotionMaster.html' },
                { text: 'Sacrifist', link: '/options/Coven/Utility/Sacrifist.html' },
                { text: 'Voodoo Master', link: '/options/Coven/Utility/VoodooMaster.html' },
              ]
            }
          ],
          '/options/Crewmates/': [
            { text: 'Back to Crewmates', link: '/options/Settings/Crewmates.html' },
            {
              text: 'Basic',
              children: [
                { text: 'Addict', link: '/options/Crewmates/Basic/Addict.html' },
                { text: 'Alchemist', link: '/options/Crewmates/Basic/Alchemist.html' },
                { text: 'Celebrity', link: '/options/Crewmates/Basic/Celebrity.html' },
                { text: 'Cleanser', link: '/options/Crewmates/Basic/Cleanser.html' },
                { text: 'Doctor', link: '/options/Crewmates/Basic/Doctor.html' },
                { text: 'Guess Master', link: '/options/Crewmates/Basic/GuessMaster.html' },
                { text: 'Lazy Guy', link: '/options/Crewmates/Basic/LazyGuy.html' },
                { text: 'Mini', link: '/options/Crewmates/Basic/Mini.html' },
                { text: 'Mole', link: '/options/Crewmates/Basic/Mole.html' },
                { text: 'Randomizer', link: '/options/Crewmates/Basic/Randomizer.html' },
                { text: 'Super Star', link: '/options/Crewmates/Basic/SuperStar.html' },
                { text: 'Task Manager', link: '/options/Crewmates/Basic/TaskManager.html' },
                { text: 'Tracefinder', link: '/options/Crewmates/Basic/Tracefinder.html' },
                { text: 'Transporter', link: '/options/Crewmates/Basic/Transporter.html' },
              ]
            },
            {
              text: 'Experimental',
              children: [
                { text: 'Catalyst', link: '/options/Crewmates/Experimental/Catalyst.html' },
              ]
            },
            {
              text: 'Ghost',
              children: [
                { text: 'Ghastly', link: '/options/Crewmates/Ghost/Ghastly.html' },
                { text: 'Hawk', link: '/options/Crewmates/Ghost/Hawk.html' },
                { text: 'Warden', link: '/options/Crewmates/Ghost/Warden.html' },
              ]
            },
            {
              text: 'Killing',
              children: [
                { text: 'Bastion', link: '/options/Crewmates/Killing/Bastion.html' },
                { text: 'Bodyguard', link: '/options/Crewmates/Killing/Bodyguard.html' },
                { text: 'Crusader', link: '/options/Crewmates/Killing/Crusader.html' },
                { text: 'Deceiver', link: '/options/Crewmates/Killing/Deceiver.html' },
                { text: 'Jailer', link: '/options/Crewmates/Killing/Jailer.html' },
                { text: 'Judge', link: '/options/Crewmates/Killing/Judge.html' },
                { text: 'Knight', link: '/options/Crewmates/Killing/Knight.html' },
                { text: 'Nice Guesser', link: '/options/Crewmates/Killing/NiceGuesser.html' },
                { text: 'Reverie', link: '/options/Crewmates/Killing/Reverie.html' },
                { text: 'Retributionist', link: '/options/Crewmates/Killing/Retributionist.html' },
                { text: 'Sheriff', link: '/options/Crewmates/Killing/Sheriff.html' },
                { text: 'Veteran', link: '/options/Crewmates/Killing/Veteran.html' },
                { text: 'Vigilante', link: '/options/Crewmates/Killing/Vigilante.html' },
              ]
            },
            {
              text: 'Power',
              children: [
                { text: 'Admirer', link: '/options/Crewmates/Power/Admirer.html' },
                { text: 'Captain', link: '/options/Crewmates/Power/Captain.html' },
                { text: 'Chief Of Police', link: '/options/Crewmates/Power/ChiefOfPolice.html' },
                { text: 'Copycat', link: '/options/Crewmates/Power/Copycat.html' },
                { text: 'Dictator', link: '/options/Crewmates/Power/Dictator.html' },
                { text: 'Guardian', link: '/options/Crewmates/Power/Guardian.html' },
                { text: 'Lookout', link: '/options/Crewmates/Power/Lookout.html' },
                { text: 'Marshall', link: '/options/Crewmates/Power/Marshall.html' },
                { text: 'Mayor', link: '/options/Crewmates/Power/Mayor.html' },
                { text: 'Monarch', link: '/options/Crewmates/Power/Monarch.html' },
                { text: 'Overseer', link: '/options/Crewmates/Power/Overseer.html' },
                { text: 'President', link: '/options/Crewmates/Power/President.html' },
                { text: 'Swapper', link: '/options/Crewmates/Power/Swapper.html' },
                { text: 'Telecommunication', link: '/options/Crewmates/Power/Telecommunication.html' },
              ]
            },
            {
              text: 'Secondary',
              children: [
                { text: 'Evil Mini', link: '/options/Crewmates/Secondary/MiniEvil.html' },
                { text: 'Nice Mini', link: '/options/Crewmates/Secondary/MiniNice.html' },
                { text: 'Requiter', link: '/options/Crewmates/Secondary/Requiter.htmll' },
              ]
            },
            {
              text: 'Support',
              children: [
                { text: 'Altruist', link: '/options/Crewmates/Support/Altruist.html' },
                { text: 'Benefactor', link: '/options/Crewmates/Support/Benefactor.html' },
                { text: 'Chameleon', link: '/options/Crewmates/Support/Chameleon.html' },
                { text: 'Coroner', link: '/options/Crewmates/Support/Coroner.html' },
                { text: 'Deputy', link: '/options/Crewmates/Support/Deputy.html' },
                { text: 'Detective', link: '/options/Crewmates/Support/Detective.html' },
                { text: 'Enigma', link: '/options/Crewmates/Support/Enigma.html' },
                { text: 'Fortune Teller', link: '/options/Crewmates/Support/FortuneTeller.html' },
                { text: 'Grenadier', link: '/options/Crewmates/Support/Grenadier.html' },
                { text: 'Inspector', link: '/options/Crewmates/Support/Inspector.html' },
                { text: 'Investigator', link: '/options/Crewmates/Support/Investigator.html' },
                { text: 'Keeper', link: '/options/Crewmates/Support/Keeper.html' },
                { text: 'Lighter', link: '/options/Crewmates/Support/Lighter.html' },
                { text: 'Mechanic', link: '/options/Crewmates/Support/Mechanic.html' },
                { text: 'Medic', link: '/options/Crewmates/Support/Medic.html' },
                { text: 'Medium', link: '/options/Crewmates/Support/Medium.html' },
                { text: 'Merchant', link: '/options/Crewmates/Support/Merchant.html' },
                { text: 'Mortician', link: '/options/Crewmates/Support/Mortician.html' },
                { text: 'Observer', link: '/options/Crewmates/Support/Observer.html' },
                { text: 'Oracle', link: '/options/Crewmates/Support/Oracle.html' },
                { text: 'Pacifist', link: '/options/Crewmates/Support/Pacifist.html' },
                { text: 'Psychic', link: '/options/Crewmates/Support/Psychic.html' },
                { text: 'Snitch', link: '/options/Crewmates/Support/Snitch.html' },
                { text: 'Socialite', link: '/options/Crewmates/Support/Socialite.html' },
                { text: 'Spiritualist', link: '/options/Crewmates/Support/Spiritualist.html' },
                { text: 'Spy', link: '/options/Crewmates/Support/Spy.html' },
                { text: 'Time Manager', link: '/options/Crewmates/Support/TimeManager.html' },
                { text: 'Time Master', link: '/options/Crewmates/Support/TimeMaster.html' },
                { text: 'Ventguard', link: '/options/Crewmates/Support/Ventguard.html' },
                { text: 'Witness', link: '/options/Crewmates/Support/Witness.html' },
              ]
            },
            {
              text: 'Vanilla',
              children: [
                { text: 'Crewmate', link: '/options/Crewmates/Vanilla/Crewmate.html' },
                { text: 'Detective', link: '/options/Crewmates/Vanilla/Detective.html' },
                { text: 'Engineer', link: '/options/Crewmates/Vanilla/Engineer.html' },
                { text: 'Guardian Angel', link: '/options/Crewmates/Vanilla/GuardianAngel.html' },
                { text: 'Noisemaker', link: '/options/Crewmates/Vanilla/Noisemaker.html' },
                { text: 'Scientist', link: '/options/Crewmates/Vanilla/Scientist.html' },
                { text: 'Tracker', link: '/options/Crewmates/Vanilla/Tracker.html' },
              ]
            }
          ],
          '/options/Impostors/': [
            { text: 'Back to Impostors', link: '/options/Settings/Impostors.html' },
            {
              text: 'Concealing',
              children: [
                { text: 'Abyssbringer', link: '/options/Impostors/Concealing/Abyssbringer.html' },
                { text: 'Escapist', link: '/options/Impostors/Concealing/Escapist.html' },
                { text: 'Lightning', link: '/options/Impostors/Concealing/Lightning.html' },
                { text: 'Miner', link: '/options/Impostors/Concealing/Miner.html' },
                { text: 'Puppeteer', link: '/options/Impostors/Concealing/Puppeteer.html' },
                { text: 'Rift Maker', link: '/options/Impostors/Concealing/RiftMaker.html' },
                { text: 'Scavenger', link: '/options/Impostors/Concealing/Scavenger.html' },
                { text: 'Shapemaster', link: '/options/Impostors/Concealing/Shapemaster.html' },
                { text: 'Soul Catcher', link: '/options/Impostors/Concealing/SoulCatcher.html' },
                { text: 'Swooper', link: '/options/Impostors/Concealing/Swooper.html' },
                { text: 'Trickster', link: '/options/Impostors/Concealing/Trickster.html' },
                { text: 'Undertaker', link: '/options/Impostors/Concealing/Undertaker.html' },
                { text: 'Vampire', link: '/options/Impostors/Concealing/Vampire.html',},
                { text: 'Warlock', link: '/options/Impostors/Concealing/Warlock.html' },
                { text: 'Wildling', link: '/options/Impostors/Concealing/Wildling.html' },
              ]
            },
            {
              text: 'Experimental',
              children: [
                { text: 'Doll Master', link: '/options/Impostors/Experimental/DollMaster.html' },
                { text: 'Exorcist', link: '/options/Impostors/Experimental/Exorcist.html' },
                { text: 'Mastermind', link: '/options/Impostors/Experimental/Mastermind.html' },
              ]
            },
            {
              text: 'Ghost',
              children: [
                { text: 'Bloodmoon', link: '/options/Impostors/Ghost/Bloodmoon.html' },
                { text: 'Minion', link: '/options/Impostors/Ghost/Minion.html' },
                { text: 'Possessor', link: '/options/Impostors/Ghost/Possessor.html' },
              ]
            },
            {
              text: 'Hindering',
              children: [
                { text: 'Anonymous', link: '/options/Impostors/Hindering/Anonymous.html' },
                { text: 'Dazzler', link: '/options/Impostors/Hindering/Dazzler.html' },
                { text: 'Devourer', link: '/options/Impostors/Hindering/Devourer.html' },
                { text: 'Disperser', link: '/options/Impostors/Hindering/Disperser.html' },
                { text: 'Penguin', link: '/options/Impostors/Hindering/Penguin.html' },
                { text: 'Pitfall', link: '/options/Impostors/Hindering/Pitfall.html' },
                { text: 'Stealth', link: '/options/Impostors/Hindering/Stealth.html' },
                { text: 'Twister', link: '/options/Impostors/Hindering/Twister.html' },
              ]
            },
            {
              text: 'Killing',
              children: [
                { text: 'Arrogance', link: '/options/Impostors/Killing/Arrogance.html' },
                { text: 'Bomber', link: '/options/Impostors/Killing/Bomber.html' },
                { text: 'Bounty Hunter', link: '/options/Impostors/Killing/BountyHunter.html' },
                { text: 'Butcher', link: '/options/Impostors/Killing/Butcher.html' },
                { text: 'Chronomancer', link: '/options/Impostors/Killing/Chronomancer.html' },
                { text: 'Councillor', link: '/options/Impostors/Killing/Councillor.html' },
                { text: 'Cursed Wolf', link: '/options/Impostors/Killing/CursedWolf.html' },
                { text: 'Deathpact', link: '/options/Impostors/Killing/Deathpact.html' },
                { text: 'Evil Guesser', link: '/options/Impostors/Killing/EvilGuesser.html' },
                { text: 'Evil Hacker', link: '/options/Impostors/Killing/EvilHacker.html' },
                { text: 'Evil Tracker', link: '/options/Impostors/Killing/EvilTracker.html' },
                { text: 'Greedy', link: '/options/Impostors/Killing/Greedy.html' },
                { text: 'Hangman', link: '/options/Impostors/Killing/Hangman.html' },
                { text: 'Inhibitor', link: '/options/Impostors/Killing/Inhibitor.html' },
                { text: 'Instigator', link: '/options/Impostors/Killing/Instigator.html' },
                { text: 'Killing Machine', link: '/options/Impostors/Killing/KillingMachine.html' },
                { text: 'Ludopath', link: '/options/Impostors/Killing/Ludopath.html' },
                { text: 'Lurker', link: '/options/Impostors/Killing/Lurker.html' },
                { text: 'Mercenary', link: '/options/Impostors/Killing/Mercenary.html' },
                { text: 'Ninja', link: '/options/Impostors/Killing/Ninja.html' },
                { text: 'Quick Shooter', link: '/options/Impostors/Killing/QuickShooter.html' },
                { text: 'Saboteur', link: '/options/Impostors/Killing/Saboteur.html' },
                { text: 'Sniper', link: '/options/Impostors/Killing/Sniper.html' },
                { text: 'Trapster', link: '/options/Impostors/Killing/Trapster.html' },
                { text: 'Underdog', link: '/options/Impostors/Killing/Underdog.html' },
                { text: 'Witch', link: '/options/Impostors/Killing/Witch.html' },
                { text: 'YinYanger', link: '/options/Impostors/Killing/YinYanger.html' },
                { text: 'Zombie', link: '/options/Impostors/Killing/Zombie.html' },
              ]
            },
            {
              text: 'Madmate',
              children: [
                { text: 'Crewpostor', link: '/options/Impostors/Madmate/Crewpostor.html' },
                { text: 'Parasite', link: '/options/Impostors/Madmate/Parasite.html' },
                { text: 'Refugee', link: '/options/Impostors/Madmate/Refugee.html' },
              ]
            },
            {
              text: 'Secondary',
              children: [
                { text: 'Bard', link: '/options/Impostors/Secondary/Bard.html' },
              ]
            },
            {
              text: 'Support',
              children: [
                { text: 'Anti Adminer', link: '/options/Impostors/Support/AntiAdminer.html' },
                { text: 'Blackmailer', link: '/options/Impostors/Support/Blackmailer.html' },
                { text: 'Camouflager', link: '/options/Impostors/Support/Camouflager.html' },
                { text: 'Cleaner', link: '/options/Impostors/Support/Cleaner.html' },
                { text: 'Consigliere', link: '/options/Impostors/Support/Consigliere.html' },
                { text: 'Double Agent', link: '/options/Impostors/Support/DoubleAgent.html' },
                { text: 'Fireworker', link: '/options/Impostors/Support/Fireworker.html' },
                { text: 'Gangster', link: '/options/Impostors/Support/Gangster.html' },
                { text: 'Godfather', link: '/options/Impostors/Support/Godfather.html' },
                { text: 'Kamikaze', link: '/options/Impostors/Support/Kamikaze.html' },
                { text: 'Morphling', link: '/options/Impostors/Support/Morphling.html' },
                { text: 'Nemesis', link: '/options/Impostors/Support/Nemesis.html' },
                { text: 'Time Thief', link: '/options/Impostors/Support/TimeThief.html' },
                { text: 'Vindicator', link: '/options/Impostors/Support/Vindicator.html' },
                { text: 'Visionary', link: '/options/Impostors/Support/Visionary.html' },
              ]
            },
            {
              text: 'Vanilla',
              children: [
                { text: 'Impostor', link: '/options/Impostors/Vanilla/Impostor.html' },
                { text: 'Phantom', link: '/options/Impostors/Vanilla/Phantom.html' },
                { text: 'Shapeshifter', link: '/options/Impostors/Vanilla/Shapeshifter.html' },
                { text: 'Viper', link: '/options/Impostors/Vanilla/Viper.html' },
              ]
            }
          ],
          '/options/Neutrals/': [
            { text: 'Back to Neutrals', link: '/options/Settings/Neutrals.html' },
            {
              text: 'Apocalypse',
              children: [
                { text: 'Baker', link: '/options/Neutrals/Apocalypse/Baker.html', },
                { text: 'Berserker', link: '/options/Neutrals/Apocalypse/Berserker.html', },
                { text: 'Plaguebearer', link: '/options/Neutrals/Apocalypse/Plaguebearer.html', },
                { text: 'Soul Collector', link: '/options/Neutrals/Apocalypse/SoulCollector.html', },
              ]
            },
            {
              text: 'Benign',
              children: [
                { text: 'Amnesiac', link: '/options/Neutrals/Benign/Amnesiac.html' },
                { text: 'Follower', link: '/options/Neutrals/Benign/Follower.html' },
                { text: 'Hater', link: '/options/Neutrals/Benign/Hater.html' },
                { text: 'Lawyer', link: '/options/Neutrals/Benign/Lawyer.html' },
                { text: 'Maverick', link: '/options/Neutrals/Benign/Maverick.html' },
                { text: 'Opportunist', link: '/options/Neutrals/Benign/Opportunist.html' },
                { text: 'Pixie', link: '/options/Neutrals/Benign/Pixie.html' },
                { text: 'Provocateur', link: '/options/Neutrals/Benign/Provocateur.html' },
                { text: 'Pursuer', link: '/options/Neutrals/Benign/Pursuer.html' },
                { text: 'Revenant', link: '/options/Neutrals/Benign/Revenant.html' },
                { text: 'Romantic', link: '/options/Neutrals/Benign/Romantic.html', },
                { text: 'Shaman', link: '/options/Neutrals/Benign/Shaman.html' },
                { text: 'Schrodingers Cat', link: '/options/Neutrals/Benign/SchrodingersCat.html' },
                { text: 'Taskinator', link: '/options/Neutrals/Benign/Taskinator.html' },
                { text: 'Troller', link: '/options/Neutrals/Benign/Troller.html' },
              ]
            },
            {
              text: 'Chaos',
              children: [
                { text: 'Collector', link: '/options/Neutrals/Chaos/Collector.html' },
                { text: 'God', link: '/options/Neutrals/Chaos/God.html' },
                { text: 'Pirate', link: '/options/Neutrals/Chaos/Pirate.html' },
                { text: 'Revolutionist', link: '/options/Neutrals/Chaos/Revolutionist.html' },
                { text: 'Solsticer', link: '/options/Neutrals/Chaos/Solsticer.html' },
                { text: 'Specter', link: '/options/Neutrals/Chaos/Specter.html' },
                { text: 'Terrorist', link: '/options/Neutrals/Chaos/Terrorist.html' },
                { text: 'Vector', link: '/options/Neutrals/Chaos/Vector.html' },
                { text: 'Vulture', link: '/options/Neutrals/Chaos/Vulture.html' },
                { text: 'Workaholic', link: '/options/Neutrals/Chaos/Workaholic.html' },
              ]
            },
            {
              text: 'Evil',
              children: [
                { text: 'Cursed Soul', link: '/options/Neutrals/Evil/CursedSoul.html' },
                { text: 'Doomsayer', link: '/options/Neutrals/Evil/Doomsayer.html' },
                { text: 'Executioner', link: '/options/Neutrals/Evil/Executioner.html' },
                { text: 'Innocent', link: '/options/Neutrals/Evil/Innocent.html' },
                { text: 'Jester', link: '/options/Neutrals/Evil/Jester.html', },
                { text: 'Punching Bag', link: '/options/Neutrals/Evil/PunchingBag.html' },
                { text: 'Seeker', link: '/options/Neutrals/Evil/Seeker.html' },
              ]
            },
            {
              text: 'Experimental',
              children: [
                { text: 'Imitator', link: '/options/Neutrals/Experimental/Imitator.html' },
                { text: 'Inquisitor', link: '/options/Neutrals/Experimental/Inquisitor.html' },
                { text: 'Lich', link: '/options/Neutrals/Experimental/Lich.html' },
                { text: 'Quizmaster', link: '/options/Neutrals/Experimental/Quizmaster.html' },
                { text: 'Shocker', link: '/options/Neutrals/Experimental/Shocker.html' },
              ]
            },
            {
              text: 'Killing',
              children: [
                { text: 'Agitator', link: '/options/Neutrals/Killing/Agitator.html' },
                { text: 'Arsonist', link: '/options/Neutrals/Killing/Arsonist.html' },
                { text: 'Bandit', link: '/options/Neutrals/Killing/Bandit.html' },
                { text: 'Blood Knight', link: '/options/Neutrals/Killing/BloodKnight.html' },
                { text: 'Cultist', link: '/options/Neutrals/Killing/Cultist.html' },
                { text: 'Demon', link: '/options/Neutrals/Killing/Demon.html' },
                { text: 'Doppelganger', link: '/options/Neutrals/Killing/Doppelganger.html' },
                { text: 'Glitch', link: '/options/Neutrals/Killing/Glitch.html' },
                { text: 'Huntsman', link: '/options/Neutrals/Killing/Huntsman.html' },
                { text: 'Infectious', link: '/options/Neutrals/Killing/Infectious.html' },
                { text: 'Jackal', link: '/options/Neutrals/Killing/Jackal.html' },
                { text: 'Juggernaut', link: '/options/Neutrals/Killing/Juggernaut.html' },
                { text: 'Pelican', link: '/options/Neutrals/Killing/Pelican.html' },
                { text: 'Pickpocket', link: '/options/Neutrals/Killing/Pickpocket.html' },
                { text: 'Plague Scientist', link: '/options/Neutrals/Killing/PlagueScientist.html' },
                { text: 'Pyromaniac', link: '/options/Neutrals/Killing/Pyromaniac.html' },
                { text: 'Serial Killer', link: '/options/Neutrals/Killing/SerialKiller.html' },
                { text: 'Shroud', link: '/options/Neutrals/Killing/Shroud.html' },
                { text: 'Spiritcaller', link: '/options/Neutrals/Killing/Spiritcaller.html' },
                { text: 'Stalker', link: '/options/Neutrals/Killing/Stalker.html' },
                { text: 'Traitor', link: '/options/Neutrals/Killing/Traitor.html' },
                { text: 'Virus', link: '/options/Neutrals/Killing/Virus.html' },
                { text: 'Werewolf', link: '/options/Neutrals/Killing/Werewolf.html' },
                { text: 'Wraith', link: '/options/Neutrals/Killing/Wraith.html' },
              ]
            },
            {
              text: 'Secondary',
              children: [
                { text: 'Death', link: '/options/Neutrals/Secondary/Death.html' },
                { text: 'Famine', link: '/options/Neutrals/Secondary/Famine.html' },
                { text: 'Pestilence', link: '/options/Neutrals/Secondary/Pestilence.html' },
                { text: 'Ruthless Romantic', link: '/options/Neutrals/Secondary/RomanticRuthless.html' },
                { text: 'Sunnyboy', link: '/options/Neutrals/Secondary/Sunnyboy.html' },
                { text: 'Vengeful Romantic', link: '/options/Neutrals/Secondary/RomanticVengeful.html' },
                { text: 'War', link: '/options/Neutrals/Secondary/War.html' },
              ]
            }
          ],
          '/options/Settings/Game': [
            { text: 'Game Settings', link: '/options/Settings/Game.html' },
            { text: 'System Settings', link: '/options/Settings/System.html' },
            { text: 'Mod Settings', link: '/options/Settings/Mod.html' },
          ],
          '/options/Settings/System': [
            { text: 'Game Settings', link: '/options/Settings/Game.html' },
            { text: 'System Settings', link: '/options/Settings/System.html' },
            { text: 'Mod Settings', link: '/options/Settings/Mod.html' },
          ],
          '/options/Settings/Mod': [
            { text: 'Game Settings', link: '/options/Settings/Game.html' },
            { text: 'System Settings', link: '/options/Settings/System.html' },
            { text: 'Mod Settings', link: '/options/Settings/Mod.html' },
          ],
        },
        repo: 'EnhancedNetwork/TOHE-Docs',
        repoLabel: 'Contribute!',
        docsRepo: 'EnhancedNetwork/TOHE-Docs',
        editLink: true,
        editLinkText: 'Contribute to this page on GitHub!',
        notFound: [
          'Where are you going?',
          'Honestly, how did you get here?',
          'Nothing to see here.',
          'Nope. Not here.',
          'Whatever you\'re looking for, it\'s not here.',
          'The page you requested does not exist.',
          'Great you\'ve gotten yourself lost.',
          'It\'s gone. Sorry.',
          'This page has vanished into thin air.',
          'You seem lost. This page does not exist.',
          'Uh-oh. This is a dead end.',
          'This page took a day off.',
          'Yikes! This page is missing in action.',
          'Well, this is awkward. The page you\'re looking for isn\'t here.',
          'This page was the Impostor...',
          'Looks like you\'ve found a page that doesn\'t exist.',
          'This page must have wandered off somewhere.',
          'You must\'ve taken the wrong exit.',
          'This page has gone on a vacation.',
          'These are not the pages you are looking for',
          'I could\'ve sworn it was right here!',
          'This page is playing hide and seek, and it\'s winning.',
        ],
        backToHome: 'Take me back!',
        toggleColorMode: 'Toggle Dark Mode',
        selectLanguageText: 'English',
      },
      '/fr/': {
        selectLanguageName: 'Français',
        home: '/translations/fr-FR.md/',
      },
      '/zh-CN/': {
        selectLanguageName: '简体中文',
        home: '/translations/zh-CN.md/',
      },
    }
  }),
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        'fr': {
          placeholder: 'Rechercher',
        },
        '/zh-CN/': {
          placeholder: '搜索',
        },
      },
    }),
  ]
})