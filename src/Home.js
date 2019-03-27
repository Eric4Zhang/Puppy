import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { BookOpen, Clock, Users, Globe } from "react-feather";
import { useTranslation } from "react-i18next";

import AppMenu from "./components/AppMenu";
import MyCarousel from "./components/MyCarousel";

export default function Home() {
  const { t, i18n } = useTranslation("translations");
  return (
    <div>
      <MyCarousel
        jsonFileUrl="./assets/documents/events-images.json"
        id="home"
      />
      <div className="my-navbar w-100" id="myNavbar">
        <AppMenu />
      </div>
      <Jumbotron className="mb-4 App-header b-light" id="about">
        <h2 className="shadow-lg mb-5 p-3">
          <span className="text-secondary">{t("about")}</span>
        </h2>
        <CardDeck>
          <Card border="none" text="secondary" className="border-0 shadow-lg">
            <Card.Body>
              <a href="#about">
                <BookOpen size={64} color="MEDIUMAQUAMARINE" />
                <Card.Text className="my-2 text-secondary">
                  {t("beliefs")}
                </Card.Text>
              </a>
              <Card.Subtitle>
                信神是無限完全唯一真神；聖父，聖子，聖靈，三而為一；同位，同權，同榮，永世無疆
              </Card.Subtitle>
            </Card.Body>
          </Card>

          <Card text="secondary" className="border-0 shadow-lg">
            <Card.Body>
              <a href="#about">
                <Clock size={64} color="MEDIUMAQUAMARINE" />
                <Card.Text className="my-2 text-secondary">
                  {t("history")}
                </Card.Text>
              </a>
              <Card.Subtitle>
                本教会于1995年9月成立于渥太华大学附近，为母堂（渥太华华人宣道会）针对国语及校园事工的植堂计划
              </Card.Subtitle>
            </Card.Body>
          </Card>

          <Card text="secondary" className="border-0 shadow-lg">
            <Card.Body>
              <a href="#about">
                <Users size={64} color="MEDIUMAQUAMARINE" />
                <Card.Text className="text-secondary my-2">
                  {t("staff")}
                </Card.Text>
              </a>
              <Card.Subtitle data-toggle="tooltip" title="牧師">
                陳明道
              </Card.Subtitle>
              <Card.Subtitle
                className="my-2"
                data-toggle="tooltip"
                title="YOUTH PASTOR"
              >
                Rev. Joshua Kahle
              </Card.Subtitle>
              <Card.Subtitle
                className="my-2"
                data-toggle="tooltip"
                title="DIRECTOR OF CHILDREN AND FAMILY MINISTRIES"
              >
                Debbie Macphail
              </Card.Subtitle>
              <Card.Subtitle
                className="my-2"
                data-toggle="tooltip"
                title="秘書"
              >
                熊達暉
              </Card.Subtitle>
            </Card.Body>
          </Card>

          <Card text="secondary" className="border-0 shadow-lg">
            <Card.Body>
              <a href="#ministry">
                <Globe size={64} color="MEDIUMAQUAMARINE" />
                <Card.Text className="text-secondary my-2">
                  {t("ministry")}
                </Card.Text>
              </a>
              <Card.Subtitle>服事部門</Card.Subtitle>
            </Card.Body>
          </Card>

          <Card className="border-0 shadow-lg">
            <Card.Body>
              <a href="#about">
                <Globe size={64} color="MEDIUMAQUAMARINE" />
                <Card.Text className="my-2 text-secondary">
                  {t("community")}
                </Card.Text>
              </a>
            </Card.Body>
          </Card>
        </CardDeck>
      </Jumbotron>
      <Jumbotron className="mb-4 App-header bg-secondary" id="participate">
        <h2 className="shadow-lg mb-5 p-3">
          <span className="text-light">{t("participate")}</span>
        </h2>
        <CardDeck>
          <Card className="bg-secondary border-0 shadow-lg">
            <Card.Body>
              <a href="#participate">
                <Card.Text className="my-2 text-light">
                  {t("worship")}
                </Card.Text>
              </a>
              <Card.Subtitle>崇拜: 10:30 am</Card.Subtitle>
            </Card.Body>
          </Card>

          <Card className="bg-secondary border-0 shadow-lg">
            <Card.Body>
              <a href="#participate">
                <Card.Text className="my-2 text-light">
                  {t("cell")}
                </Card.Text>
              </a>
            </Card.Body>
          </Card>

          <Card className="bg-secondary border-0 shadow-lg">
            <Card.Body>
              <a href="#universityFellowship">
                <Card.Text className="text-light my-2">
                  {t("universityFellowship")}
                </Card.Text>
              </a>
            </Card.Body>
          </Card>

          <Card className="bg-secondary border-0 shadow-lg">
            <Card.Body>
              <a href="#youthFellowship">
                <Card.Text className="text-light my-2">
                  {t("youthFellowship")}
                </Card.Text>
              </a>
            </Card.Body>
          </Card>

          <Card className="bg-secondary border-0 shadow-lg">
            <Card.Body>
              <a href="#about">
                <Card.Text className="my-2 text-light">
                  {t("childrenActivity")}
                </Card.Text>
              </a>
            </Card.Body>
          </Card>

          <Card className="bg-secondary border-0 shadow-lg">
            <Card.Body>
              <a href="#about">
                <Card.Text className="my-2 text-light">
                  {t("training")}
                </Card.Text>
              </a>
            </Card.Body>
          </Card>
        </CardDeck>
      </Jumbotron>
      <Jumbotron className="mb-4 App-header bg-light" id="events">
        <h2 className=" mb-5 shadow-lg p-3">
          <span className="text-secondary">{t("events")}</span>
        </h2>
        <CardDeck>
          <Card className=" border-0 shadow-lg">
            <Card.Body>
              <a href="#participate">
                <Card.Text className="my-2 text-secondary">
                  {t("notification")}
                </Card.Text>
              </a>
            </Card.Body>
          </Card>

          <Card className=" border-0 shadow-lg">
            <Card.Body>
              <a href="#participate">
                <Card.Text className="my-2 text-secondary">
                  {t("upcomingEvents")}
                </Card.Text>
              </a>
            </Card.Body>
          </Card>

          <Card className=" border-0 shadow-lg">
            <Card.Body>
              <a href="#universityFellowship">
                <Card.Text className="text-secondary my-2">
                  {t("calendar")}
                </Card.Text>
              </a>
            </Card.Body>
          </Card>

          <Card className=" border-0 shadow-lg">
            <Card.Body>
              <a href="#universityFellowship">
                <Card.Text className="text-secondary my-2">
                  {t("reviews")}
                </Card.Text>
              </a>
            </Card.Body>
          </Card>
        </CardDeck>
      </Jumbotron>
      <Jumbotron className="mb-4 App-header bg-secondary" id="mission">
        <h2 className=" mb-5 shadow-lg p-3">
          <span className="text-light">{t("mission")}</span>
        </h2>
        <CardDeck>
          <Card className="bg-secondary border-0 shadow-lg">
            <Card.Body>
              <a href="#participate">
                <Card.Text className="my-2 text-light">
                  {t("vision")}
                </Card.Text>
              </a>
            </Card.Body>
          </Card>

          <Card className="bg-secondary border-0 shadow-lg">
            <Card.Body>
              <a href="#participate">
                <Card.Text className="my-2 text-light">
                  {t("missionaryStory")}
                </Card.Text>
              </a>
            </Card.Body>
          </Card>

          <Card className="bg-secondary border-0 shadow-lg">
            <Card.Body>
              <a href="#universityFellowship">
                <Card.Text className="text-light my-2">
                  {t("joinMission")}
                </Card.Text>
              </a>
            </Card.Body>
          </Card>

          <Card className="bg-secondary border-0 shadow-lg">
            <Card.Body>
              <a href="#donate">
                <Card.Text className="text-light my-2">
                  {t("donate")}
                </Card.Text>
              </a>
            </Card.Body>
          </Card>
        </CardDeck>
      </Jumbotron>
      <Jumbotron className="mb-4 App-header bg-light" id="resource">
        <h2 className="mb-5 shadow-lg p-3">
          <span className="text-secondary">{t("resource")}</span>
        </h2>
        <CardDeck>
          <Card className=" border-0 shadow-lg">
            <Card.Body>
              <a href="#participate">
                <Card.Text className="my-2 text-secondary">
                  {t("sundaySermon")}
                </Card.Text>
              </a>
            </Card.Body>
          </Card>

          <Card className=" border-0 shadow-lg">
            <Card.Body>
              <a href="#participate">
                <Card.Text className="my-2 text-secondary">
                  {t("sermonNotes")}
                </Card.Text>
              </a>
            </Card.Body>
          </Card>

          <Card className=" border-0 shadow-lg">
            <Card.Body>
              <a href="#universityFellowship">
                <Card.Text className="text-secondary my-2">
                  {t("books")}
                </Card.Text>
              </a>
            </Card.Body>
          </Card>

          <Card className=" border-0 shadow-lg">
            <Card.Body>
              <a href="#youthFellowship">
                <Card.Text className="text-secondary my-2">
                  {t("witness")}
                </Card.Text>
              </a>
            </Card.Body>
          </Card>

          <Card className=" border-0 shadow-lg">
            <Card.Body>
              <a href="#about">
                <Card.Text className="my-2 text-secondary">
                  {t("links")}
                </Card.Text>
              </a>
            </Card.Body>
          </Card>
        </CardDeck>
      </Jumbotron>
      <Jumbotron className="mb-4 App-header bg-secondary" id="connect">
        <h2 className="mb-5 shadow-lg p-3">
          <span className="text-light">{t("connect")}</span>
        </h2>
        <CardDeck>
          <Card className="bg-secondary border-0 shadow-lg">
            <Card.Body>
              <a href="#participate">
                <Card.Text className="my-2 text-light">
                  {t("newPeople")}
                </Card.Text>
              </a>
            </Card.Body>
          </Card>

          <Card className="bg-secondary border-0 shadow-lg">
            <Card.Body>
              <a href="#participate">
                <Card.Text className="my-2 text-light">
                  {t("connectGroup")}
                </Card.Text>
              </a>
            </Card.Body>
          </Card>

          <Card className="bg-secondary border-0 shadow-lg">
            <Card.Body>
              <a href="#universityFellowship">
                <Card.Text className="text-light my-2">
                  {t("contact")}
                </Card.Text>
              </a>
            </Card.Body>
          </Card>
        </CardDeck>
      </Jumbotron>
    </div>
  );
}
