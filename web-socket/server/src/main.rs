use futures_util::{SinkExt, StreamExt};
use tokio::time::{interval, Duration};
use warp::ws::Message;
use warp::Filter; // Import StreamExt correctly

#[tokio::main]
async fn main() {
    let ws_route = warp::path("ws").and(warp::ws()).map(|ws: warp::ws::Ws| {
        ws.on_upgrade(|websocket| {
            let (mut tx, _rx) = websocket.split();
            let mut i: isize = 0;
            tokio::spawn(async move {
                let mut interval = interval(Duration::from_secs(1));
                loop {
                    interval.tick().await;
                    i += 1;
                    if (tx.send(Message::text(i.to_string())).await).is_err() {
                        break;
                    }
                }
            });

            futures_util::future::ready(())
        })
    });

    warp::serve(ws_route).run(([127, 0, 0, 1], 3030)).await;
}
