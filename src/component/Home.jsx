import React from "react";
import Card3 from "./Card3";
import Header from "./Header";
import Caraousel from "./Caraousel";




export const Home = () => {


    return (
        <>
            <Header />
            
                <Caraousel/>
                <h1 className="font-semibold text-white p-5 text-[30px] ml-4">Featured Game</h1>

               

                    <div className="flex ml-6 mr-6 justify-between">
                        <Card3
                            title=""
                            // content=" Valorant is a tactical first-person shooter (FPS) game developed by Riot Games, known for its precise gunplay and unique character abilities, where two teams compete in objective-based matches."
                            imageSrc="https://images3.alphacoders.com/129/thumbbig-1298918.webp"
                            name="VALORANT"
                            des="
                            Valorant is a competitive, team-based first-person shooter (FPS) developed and published by Riot Games. In Valorant, players form teams and engage in tactical battles where they use unique characters, known as Agents, each with special abilities. The game combines precise gunplay with strategic abilities, creating an exciting and challenging gaming experience" 
                            tit="VALORANT"
                            />

                        <Card3
                            title=""
                            // content="(Counter-Strike: Global Offensive): CS:GO is a classic multiplayer first-person shooter game where terrorists and counter-terrorists engage in intense team-based battles, emphasizing strategy and gunplay."
                            imageSrc="https://images4.alphacoders.com/576/thumbbig-576758.webp"
                            name="COUNTER-STRIKE 2" 
                            tit="COUNTER-STRIKE 2"
                            des="CS:GO is a competitive first-person shooter known for its intense gunplay and strategic gameplay. Players join terrorist or counter-terrorist teams, with the goal of completing objectives or eliminating the opposing team."/>
                        <Card3  title=""
                            // content=" Valorant is a tactical first-person shooter (FPS) game developed by Riot Games, known for its precise gunplay and unique character abilities, where two teams compete in objective-based matches."
                            imageSrc="https://images4.alphacoders.com/889/thumbbig-889823.webp"
                            name="FORTNITE"
                            tit="FORTNITE"
                            des=" Fortnite is a popular battle royale game featuring vibrant graphics and a building mechanic. 100 players fight to be the last one standing, either individually or in teams." />
                    </div >
                    <div className="flex  ml-6 mr-6  justify-between">
                        <Card3
                            title=""
                            // content=" Valorant is a tactical first-person shooter (FPS) game developed by Riot Games, known for its precise gunplay and unique character abilities, where two teams compete in objective-based matches."
                            imageSrc="https://images7.alphacoders.com/439/thumbbig-439636.webp"
                            name="GTA 5"
                            tit="GTA 5"
                            des="GTA 5 is an open-world action-adventure game with a compelling story, set in the fictional state of San Andreas. Players can engage in various criminal activities, missions, and explore a vast, immersive world." />

                        <Card3
                            title=""
                            // content="(Counter-Strike: Global Offensive): CS:GO is a classic multiplayer first-person shooter game where terrorists and counter-terrorists engage in intense team-based battles, emphasizing strategy and gunplay."
                            imageSrc="https://images8.alphacoders.com/708/thumbbig-708545.webp"
                            name="WATCH DOGS"
                            tit="WATCH DOGS"
                            des="In Watch Dogs, players take on the role of a skilled hacker in an open-world rendition of Chicago. The game combines action, stealth, and hacking to manipulate the city's systems and take down enemies." />
                            <Card3  title=""
                            // content=" Valorant is a tactical first-person shooter (FPS) game developed by Riot Games, known for its precise gunplay and unique character abilities, where two teams compete in objective-based matches."
                            imageSrc="https://images8.alphacoders.com/547/thumbbig-547290.webp"
                            name="MAX PAYNE 3"
                            tit="MAX PAYNE 3"
                            des="Max Payne 3 is a third-person shooter with a dark and cinematic narrative. Players step into the shoes of Max Payne, a former NYPD detective, navigating a tale of crime and corruption in Brazil."/>
                    </div>
                    <div className="flex  ml-6 mr-6  justify-between">
                        <Card3
                            title=""
                            // content=" Valorant is a tactical first-person shooter (FPS) game developed by Riot Games, known for its precise gunplay and unique character abilities, where two teams compete in objective-based matches."
                            imageSrc="https://images2.alphacoders.com/107/thumbbig-1076844.webp"
                            name="MAN-HUNT"
                            tit="MAN-HUNT" 
                            des="Manhunt is a psychological horror game where players must survive deadly hunts by skilled assassins in a brutal and gruesome urban environment."/>

                        <Card3
                            title=""
                            // content="(Counter-Strike: Global Offensive): CS:GO is a classic multiplayer first-person shooter game where terrorists and counter-terrorists engage in intense team-based battles, emphasizing strategy and gunplay."
                            imageSrc="https://images3.alphacoders.com/886/thumbbig-886140.webp"
                            name="WATCH DOGS-LEGION"
                            tit="WATCH DOGS-LEGION"
                            des="This sequel to Watch Dogs takes place in a near-future London, where players can recruit and play as any character in the city. Hacking and freedom-fighting are central to the game's storyline" />
                            <Card3
                              title=""
                              // content=" Valorant is a tactical first-person shooter (FPS) game developed by Riot Games, known for its precise gunplay and unique character abilities, where two teams compete in objective-based matches."
                              imageSrc="https://images.alphacoders.com/116/thumbbig-1168382.webp"
                              name="FORZA HORIZON 5"
                              tit="FORZA HORIZON 5"
                              des="Forza Horizon is a racing video game series known for its open-world, festival atmosphere, and realistic driving experience. Players can race, customize cars, and explore a stunning in-game world"/>
                    </div>
              
          
            </>
    );
};
