const quizQuestions = [
  {
    difficulty: "soft",
    question: "【第1章】1種類の物質だけでできており、融点や沸点が一定である物質を何というか？",
    answer: "純物質",
    comment: "酸素、水、塩化ナトリウムなどが純物質の例です。"
  },
  {
    difficulty: "soft",
    question: "【第1章】2種類以上の物質が混ざり合っており、融点や沸点が一定ではない物質を何というか？",
    answer: "混合物",
    comment: "空気、海水、石油などが混合物の例です。"
  },
  {
    difficulty: "soft",
    question: "【第1章】液体に溶けない固体を、ろ紙などを用いて分離する操作を何というか？",
    answer: "ろ過",
    comment: "混ざり合った物質を分ける操作の一つです。"
  },
  {
    difficulty: "soft",
    question: "【第1章】温度による溶解度の違いを利用して、溶液から結晶を取り出す分離操作を何というか？",
    answer: "再結晶",
    comment: "不純物を含んだ固体から純粋な物質を取り出す際によく使われます。"
  },
  {
    difficulty: "soft",
    question: "【第1章】目的の物質だけを溶かす溶媒を使って分離する操作を何というか？",
    answer: "抽出",
    comment: "お茶の葉からお茶の成分をお湯に溶かし出すのも抽出の一種です。"
  },
  {
    difficulty: "soft",
    question: "【第1章】液体を加熱して気体にし、それを冷却して再び液体にして集める分離操作を何というか？",
    answer: "蒸留",
    comment: "沸点の違いを利用して分離します。液体の混合物を分離する場合は分留とも呼ばれます。"
  },
  {
    difficulty: "soft",
    question: "【第1章】固体から直接気体になりやすい性質を利用して物質を分離・精製する方法を何というか？",
    answer: "昇華法",
    comment: "ヨウ素など、昇華しやすい物質の分離に用いられます。"
  },
  {
    difficulty: "soft",
    question: "【第1章】ろ紙や吸着剤への移動速度の違いを利用して物質を分ける操作を何というか？",
    answer: "クロマトグラフィー",
    comment: "インクの色素を分ける実験などでよく使われます。"
  },
  {
    difficulty: "soft",
    question: "【第1章】物質を構成する基本的な成分のことを何というか？",
    answer: "元素",
    comment: "現在までに約120種類の元素が知られています。"
  },
  {
    difficulty: "soft",
    question: "【第1章】1種類の元素からなる純物質を何というか？",
    answer: "単体",
    comment: "O2、N2、C、Naなどが単体の例です。"
  },
  {
    difficulty: "soft",
    question: "【第1章】2種類以上の元素からなる純物質を何というか？",
    answer: "化合物",
    comment: "H2O、CO2、NaClなどが化合物の例です。"
  },
  {
    difficulty: "soft",
    question: "【第1章】同じ元素の単体であるが、性質が異なる物質どうしを何というか？",
    answer: "同素体",
    comment: "原子の並び方や結合の仕方が違うために生じます。"
  },
  {
    difficulty: "soft",
    question: "【第1章】物質そのものが別の物質に変わる変化を何というか？",
    answer: "化学変化",
    comment: "燃焼や錆びる現象などが化学変化に該当します。"
  },
  {
    difficulty: "soft",
    question: "【第1章】物質そのものは変わらず、状態だけが変わる変化を何というか？",
    answer: "物理変化",
    comment: "氷が水になるなど、状態変化は物理変化の一つです。"
  },
  {
    difficulty: "soft",
    question: "【第1章】粒子が熱運動によって自然に散らばり、広がっていく現象を何というか？",
    answer: "拡散",
    comment: "においが部屋中に広がる現象などが拡散の例です。"
  },
  {
    difficulty: "medium",
    question: "【第1章】空気、海水、石油は、純物質と混合物のどちらに分類されるか？",
    answer: "混合物",
    comment: "これらは2種類以上の物質が混ざっているため混合物です。"
  },
  {
    difficulty: "medium",
    question: "【第1章】酸素、水、塩化ナトリウムは、純物質と混合物のどちらに分類されるか？",
    answer: "純物質",
    comment: "これらは1種類の物質だけでできています。"
  },
  {
    difficulty: "medium",
    question: "【第1章】ヨウ素をヘキサンを用いて分離する操作は、何という分離方法か？",
    answer: "抽出",
    comment: "ヨウ素がヘキサンによく溶ける性質を利用しています。"
  },
  {
    difficulty: "medium",
    question: "【第1章】O2やN2は、単体と化合物のどちらか？",
    answer: "単体",
    comment: "1種類の元素（酸素や窒素）からできているため単体です。"
  },
  {
    difficulty: "medium",
    question: "【第1章】H2OやNaClは、単体と化合物のどちらか？",
    answer: "化合物",
    comment: "HとO、NaとClのように、2種類以上の元素からできているため化合物です。"
  },
  {
    difficulty: "medium",
    question: "【第1章】同素体をもつ代表的な4つの元素を、元素記号を用いて「SCOP」と覚えるが、それぞれの元素名は何か？",
    answer: "硫黄、炭素、酸素、リン",
    comment: "S（硫黄）、C（炭素）、O（酸素）、P（リン）の4つです。"
  },
  {
    difficulty: "medium",
    question: "【第1章】特定の元素を含んだ物質を炎の中に入れると、特有の色の炎を出す反応を何というか？",
    answer: "炎色反応",
    comment: "成分元素の検出に用いられます。"
  },
  {
    difficulty: "medium",
    question: "【第1章】物質を構成する粒子が常に動いていることを何というか？",
    answer: "熱運動",
    comment: "温度が高くなるほど、熱運動は激しくなります。"
  },
  {
    difficulty: "medium",
    question: "【第1章】固体、液体、気体の3つの状態をまとめて何というか？",
    answer: "三態",
    comment: "物質の三態と呼びます。"
  },
  {
    difficulty: "medium",
    question: "【第1章】固体から液体になる状態変化を何というか？",
    answer: "融解",
    comment: "氷が水になる変化のことです。"
  },
  {
    difficulty: "medium",
    question: "【第1章】液体から固体になる状態変化を何というか？",
    answer: "凝固",
    comment: "水が氷になる変化のことです。"
  },
  {
    difficulty: "medium",
    question: "【第1章】液体から気体になる状態変化を何というか？",
    answer: "蒸発",
    comment: "水が水蒸気になる変化のことです。"
  },
  {
    difficulty: "medium",
    question: "【第1章】気体から液体になる状態変化を何というか？",
    answer: "凝縮",
    comment: "水蒸気が水になる変化のことです。"
  },
  {
    difficulty: "medium",
    question: "【第1章】固体が液体にならずに直接気体になる状態変化を何というか？",
    answer: "昇華",
    comment: "ドライアイスやヨウ素で見られる現象です。"
  },
  {
    difficulty: "medium",
    question: "【第1章】気体が液体にならずに直接固体になる状態変化を何というか？",
    answer: "凝華",
    comment: "かつてはこれも昇華と呼ばれていましたが、現在は区別することが多いです。"
  },
  {
    difficulty: "hard",
    question: "【第1章】純物質と混合物を見分ける際、融点や沸点を測定するとどのような違いがあるか？",
    answer: "純物質は一定だが、混合物は一定ではない",
    comment: "混合物は状態変化の最中も温度が変化し続けます。"
  },
  {
    difficulty: "hard",
    question: "【第1章】蒸留や分留は、物質のどのような性質の違いを利用して分離を行っているか？",
    answer: "沸点の違い",
    comment: "沸点の低い物質から先に気体になって出てきます。"
  },
  {
    difficulty: "hard",
    question: "【第1章】再結晶は、物質のどのような性質の違いを利用して分離を行っているか？",
    answer: "温度による溶解度の違い",
    comment: "温度を下げると溶けきれなくなった物質が結晶として現れます。"
  },
  {
    difficulty: "hard",
    question: "【第1章】蒸留の実験などで、発生した気体を冷却して液体に戻すためによく用いられる器具の名称は何か？",
    answer: "リービッヒ冷却器",
    comment: "冷却水は下から上に向かって流すなどの注意点があります。"
  },
  {
    difficulty: "hard",
    question: "【第1章】クロマトグラフィーは、物質のどのような性質の違いを利用して分離を行っているか？",
    answer: "ろ紙や吸着剤への移動速度の違い",
    comment: "物質によってろ紙を移動するしやすさが異なることを利用します。"
  },
  {
    difficulty: "hard",
    question: "【第1章】同素体（例えば酸素O2とオゾンO3）は、同じ元素の単体であるのに性質が異なるのはなぜか？",
    answer: "原子の並び方が違うため",
    comment: "構成する元素は同じでも、構造が異なるため全く別の性質を示します。"
  },
  {
    difficulty: "hard",
    question: "【第1章】炎色反応の覚え方「リアカー無きK村…」で、「無き」が示す元素とその炎の色は何か？",
    answer: "ナトリウム（黄色）",
    comment: "「無（Na）き（黄色）」となります。"
  },
  {
    difficulty: "hard",
    question: "【第1章】水溶液中に銀イオンが含まれているとき、塩化物イオンを加えると生じる塩化銀（AgCl）の沈殿は何色か？",
    answer: "白色",
    comment: "成分元素の塩素を検出する際によく使われる白色沈殿です。"
  },
  {
    difficulty: "hard",
    question: "【第1章】石灰水を通すと白く濁る反応を利用して、何という化合物の発生を確認できるか？",
    answer: "二酸化炭素",
    comment: "CO2の検出によく使われ、炭素元素が含まれていることの確認に繋がります。"
  },
  {
    difficulty: "hard",
    question: "【第1章】純物質の加熱時間と温度のグラフにおいて、融点や沸点に達している間は加熱を続けても温度が一定に保たれる。これはなぜか？",
    answer: "加えられた熱が状態変化に使われるため",
    comment: "状態変化が終わるまでは温度が上昇しません。"
  },
  {
    difficulty: "hard",
    question: "【第1章】固体が液体になる状態変化の際に吸収され、温度を一定に保つ要因となるエネルギーを何というか？",
    answer: "融解熱",
    comment: "物質の結合を緩めるために使われます。"
  },
  {
    difficulty: "hard",
    question: "【第1章】液体が気体になる状態変化の際に吸収され、温度を一定に保つ要因となるエネルギーを何というか？",
    answer: "蒸発熱",
    comment: "気化熱とも呼ばれ、粒子がバラバラになるために使われます。"
  },
  {
    difficulty: "hard",
    question: "【第1章】物質の三態のうち、粒子の熱運動が最も激しく、粒子同士が空間を自由に飛び回っている状態はどれか？",
    answer: "気体",
    comment: "気体の粒子は非常に大きな熱運動をしています。"
  },
  {
    difficulty: "hard",
    question: "【第1章】元素と単体を区別する際、「水を電気分解すると水素と酸素になる」の酸素は元素と単体のどちらの意味で使われているか？",
    answer: "単体",
    comment: "実際に存在する物質としての酸素（O2）を指しているため単体です。"
  },
  {
    difficulty: "hard",
    question: "【第1章】元素と単体を区別する際、「水には酸素が含まれている」の酸素は元素と単体のどちらの意味で使われているか？",
    answer: "元素",
    comment: "化合物の成分としての酸素（O）を指しているため元素です。"
  },

  {
    difficulty: "soft",
    question: "【第2章】原子の中心にあり、陽子と中性子からなる部分を何というか？",
    answer: "原子核",
    comment: "原子核は正の電気を持つ陽子と、電気を持たない中性子で構成されています[cite: 2]。"
  },
  {
    difficulty: "soft",
    question: "【第2章】原子核を構成する粒子のうち、正の電気を持つものを何というか？",
    answer: "陽子",
    comment: "陽子の数は原子番号と等しくなります[cite: 2]。"
  },
  {
    difficulty: "soft",
    question: "【第2章】原子核を構成する粒子のうち、電気を持たないものを何というか？",
    answer: "中性子",
    comment: "陽子と中性子を合わせた数が質量数となります[cite: 2]。"
  },
  {
    difficulty: "soft",
    question: "【第2章】原子核のまわりを回っている、負の電気を持つ粒子を何というか？",
    answer: "電子",
    comment: "原子において電子の数は陽子の数と等しくなります[cite: 2]。"
  },
  {
    difficulty: "soft",
    question: "【第2章】原子における、陽子の数と中性子の数の和を何というか？",
    answer: "質量数",
    comment: "同位体どうしではこの質量数が異なります[cite: 2]。"
  },
  {
    difficulty: "soft",
    question: "【第2章】原子の中で、電子が入っている層のことを何というか？",
    answer: "電子殻",
    comment: "内側からK殻、L殻、M殻、N殻と続きます[cite: 2]。"
  },
  {
    difficulty: "soft",
    question: "【第2章】最も内側にある電子殻の名称を何というか？",
    answer: "K殻",
    comment: "K殻に入れる最大の電子数は2個です[cite: 2]。"
  },
  {
    difficulty: "soft",
    question: "【第2章】原子において、一番外側の電子殻にある電子を何というか？",
    answer: "最外殻電子",
    comment: "これが結合などの化学的性質に大きく影響します[cite: 2]。"
  },
  {
    difficulty: "soft",
    question: "【第2章】最外殻電子のうち、他の原子との結合に関係する電子を何というか？",
    answer: "価電子",
    comment: "安定している貴ガスの場合は「0」とみなします[cite: 2]。"
  },
  {
    difficulty: "soft",
    question: "【第2章】原子が電子を失ってプラスの電気を帯びた粒子を何というか？",
    answer: "陽イオン",
    comment: "原子が安定な貴ガスと同じ電子配置になろうとして生じます[cite: 2]。"
  },
  {
    difficulty: "soft",
    question: "【第2章】原子が電子を受け取ってマイナスの電気を帯びた粒子を何というか？",
    answer: "陰イオン",
    comment: "電子を受け取ることで安定な電子配置になります[cite: 2]。"
  },
  {
    difficulty: "soft",
    question: "【第2章】原子番号順に元素を並べ、性質の似た元素をまとめた表を何というか？",
    answer: "周期表",
    comment: "性質が周期的に現れる規則（周期律）に基づいています[cite: 2]。"
  },
  {
    difficulty: "soft",
    question: "【第2章】周期表における横の行を何というか？",
    answer: "周期",
    comment: "第1周期から第7周期まで存在します[cite: 2]。"
  },
  {
    difficulty: "soft",
    question: "【第2章】周期表における縦の列を何というか？",
    answer: "族",
    comment: "1族から18族まで分類されています[cite: 2]。"
  },
  {
    difficulty: "soft",
    question: "【第2章】周期表で同じ族に属し、化学的性質が似ている元素グループを何というか？",
    answer: "同族元素",
    comment: "アルカリ金属やハロゲンなどがその代表例です[cite: 2]。"
  },
  {
    difficulty: "medium",
    question: "【第2章】原子番号と同じ数になるものを2つ答えよ。",
    answer: "陽子の数と電子の数",
    comment: "「原子番号＝陽子の数＝電子の数」という関係が成り立ちます[cite: 2]。"
  },
  {
    difficulty: "medium",
    question: "【第2章】L殻に入れる最大の電子数はいくつか？",
    answer: "8個",
    comment: "最大電子数は「2かけるnの2乗」個で計算できます[cite: 2]。"
  },
  {
    difficulty: "medium",
    question: "【第2章】M殻に入れる最大の電子数はいくつか？",
    answer: "18個",
    comment: "n=3の場合であるため、2×3の2乗で18個となります[cite: 2]。"
  },
  {
    difficulty: "medium",
    question: "【第2章】安定していて結合しにくい貴ガス（希ガス）の価電子はいくつとみなすか？",
    answer: "0",
    comment: "最外殻電子が存在していても、結合に関係しないため価電子は0となります[cite: 2]。"
  },
  {
    difficulty: "medium",
    question: "【第2章】水素を除く、1族の同族元素を何というか？",
    answer: "アルカリ金属",
    comment: "水素（H）は含まれない点に注意が必要です[cite: 2]。"
  },
  {
    difficulty: "medium",
    question: "【第2章】ベリリウムとマグネシウムを除く、2族の同族元素を何というか？",
    answer: "アルカリ土類金属",
    comment: "BeとMgが除外されることが特徴です[cite: 2]。"
  },
  {
    difficulty: "medium",
    question: "【第2章】17族に属する同族元素を何というか？",
    answer: "ハロゲン",
    comment: "化学的に反応しやすい非金属元素のグループです[cite: 2]。"
  },
  {
    difficulty: "medium",
    question: "【第2章】18族に属する同族元素を何というか？",
    answer: "貴ガス",
    comment: "化学的に非常に安定した元素のグループです[cite: 2]。"
  },
  {
    difficulty: "medium",
    question: "【第2章】ナトリウムイオンの正しいイオン式を答えよ。",
    answer: "Na+",
    comment: "電子を1個失ってできる1価の陽イオンです[cite: 2]。"
  },
  {
    difficulty: "medium",
    question: "【第2章】カルシウムイオンの正しいイオン式を答えよ。",
    answer: "Ca2+",
    comment: "電子を2個失ってできる2価の陽イオンです[cite: 2]。"
  },
  {
    difficulty: "medium",
    question: "【第2章】アルミニウムイオンの正しいイオン式を答えよ。",
    answer: "Al3+",
    comment: "電子を3個失ってできる3価の陽イオンです[cite: 2]。"
  },
  {
    difficulty: "medium",
    question: "【第2章】アンモニウムイオンの正しいイオン式を答えよ。",
    answer: "NH4+",
    comment: "複数の原子からなる多原子イオンの一種で、1価の陽イオンです[cite: 2]。"
  },
  {
    difficulty: "medium",
    question: "【第2章】水酸化物イオンの正しいイオン式を答えよ。",
    answer: "OH-",
    comment: "酸素と水素からなる1価の陰イオンです[cite: 2]。"
  },
  {
    difficulty: "medium",
    question: "【第2章】硫酸イオンの正しいイオン式を答えよ。",
    answer: "SO4 2-",
    comment: "硫黄と酸素からなる2価の多原子陰イオンです[cite: 2]。"
  },
  {
    difficulty: "medium",
    question: "【第2章】リン酸イオンの正しいイオン式を答えよ。",
    answer: "PO4 3-",
    comment: "リンと酸素からなる3価の多原子陰イオンです[cite: 2]。"
  },
  {
    difficulty: "hard",
    question: "【第2章】原子番号は同じだが、中性子の数が違うために質量数が異なる原子同士を何というか？",
    answer: "同位体（アイソトープ）",
    comment: "同じ元素であっても質量が異なるのが特徴です[cite: 2]。"
  },
  {
    difficulty: "hard",
    question: "【第2章】原子核が不安定で、放射線を出して別の元素に変わる同位体を何というか？",
    answer: "放射性同位体（ラジオアイソトープ）",
    comment: "アルファ線、ベータ線、ガンマ線などの放射線を出します[cite: 2]。"
  },
  {
    difficulty: "hard",
    question: "【第2章】放射性同位体の量が元の半分になるまでの時間を何といい、何に利用されるか？",
    answer: "半減期といい、年代測定に利用される",
    comment: "一定のペースで量が減っていく（壊変する）性質を利用しています[cite: 2]。"
  },
  {
    difficulty: "hard",
    question: "【第2章】電子1個を取り去って1価の陽イオンにするのに必要なエネルギーを何というか？",
    answer: "イオン化エネルギー",
    comment: "このエネルギーが小さいほど、陽イオンになりやすいことを示します[cite: 2]。"
  },
  {
    difficulty: "hard",
    question: "【第2章】イオン化エネルギーが最も大きくなるのは、どの同族元素のグループか？",
    answer: "貴ガス",
    comment: "非常に安定しているため、電子を取り去るのに大きなエネルギーが必要です[cite: 2]。"
  },
  {
    difficulty: "hard",
    question: "【第2章】電子1個を受け取って1価の陰イオンになるときに放出されるエネルギーを何というか？",
    answer: "電子親和力",
    comment: "このエネルギーが大きいほど、陰イオンになりやすいことを示します[cite: 2]。"
  },
  {
    difficulty: "hard",
    question: "【第2章】同じ電子配置のイオン同士では、原子番号が大きくなるほどイオン半径はどう変化するか？",
    answer: "小さくなる",
    comment: "陽子の数と電子を引きつける力が関係しています[cite: 2]。"
  },
  {
    difficulty: "hard",
    question: "【第2章】同じ電子配置のイオンにおいて、原子番号が大きくなるほどイオン半径が小さくなるのはなぜか？",
    answer: "陽子の数が多くなって電子を引きつける力が強くなるため",
    comment: "中心のプラスの力が強くなることで、全体がギュッと引き締まります[cite: 2]。"
  },
  {
    difficulty: "hard",
    question: "【第2章】元素の周期的性質において、陽イオンになりやすい性質を何というか？",
    answer: "陽性",
    comment: "金属元素に強い傾向があります[cite: 2]。"
  },
  {
    difficulty: "hard",
    question: "【第2章】元素の周期的性質において、陰イオンになりやすい性質を何というか？",
    answer: "陰性",
    comment: "非金属元素に強い傾向があります[cite: 2]。"
  },
  {
    difficulty: "hard",
    question: "【第2章】原子番号順に元素を並べると、性質の似た元素が周期的に現れる規則を何というか？",
    answer: "周期律",
    comment: "この規則性を表にまとめたものが周期表です[cite: 2]。"
  },
  {
    difficulty: "hard",
    question: "【第2章】元素を大きく2つに分類する際、典型元素と対になる分類名は何か？",
    answer: "遷移元素",
    comment: "周期表の位置（族）によって典型元素と遷移元素に分けられます[cite: 2]。"
  },
  {
    difficulty: "hard",
    question: "【第2章】元素の性質による分類で、金属元素と対になる分類名は何か？",
    answer: "非金属元素",
    comment: "それぞれ陽性、陰性の特徴と深く結びついています[cite: 2]。"
  },
  {
    difficulty: "hard",
    question: "【第2章】それぞれの電子殻に入れる最大電子数を求める式を、「n」を用いて答えよ。",
    answer: "2かけるnの2乗",
    comment: "内側からn番目の電子殻の最大収容数を表します[cite: 2]。"
  },
  {
    difficulty: "hard",
    question: "【第2章】放射性同位体が放射線を出して別の元素に変わる現象を何というか？",
    answer: "壊変",
    comment: "この現象によって同位体の量が半分になるまでの時間が半減期です[cite: 2]。"
  },
  {
    difficulty: "soft",
    question: "【第3章】陽イオンの正電荷と陰イオンの負電荷の間の静電気的な引力を何というか？",
    answer: "クーロン力",
    comment: "このクーロン力による結合を「イオン結合」と呼びます[cite: 3]。"
  },
  {
    difficulty: "soft",
    question: "【第3章】イオン結合でできた規則正しい配列のことを何というか？",
    answer: "結晶格子",
    comment: "結晶格子の最小単位は「単位格子」と呼ばれます[cite: 3]。"
  },
  {
    difficulty: "soft",
    question: "【第3章】結晶格子の最小単位を何というか？",
    answer: "単位格子",
    comment: "これらが規則正しく配列して結晶格子を作ります[cite: 3]。"
  },
  {
    difficulty: "soft",
    question: "【第3章】全体の電荷が0になる個数の割合で表した式を何というか？",
    answer: "組成式",
    comment: "NaClやCaCl2などは組成式で表されます[cite: 3]。"
  },
  {
    difficulty: "soft",
    question: "【第3章】1つの粒子に隣り合う粒子の数を何というか？",
    answer: "配位数",
    comment: "塩化ナトリウム型（NaCl型）では配位数は6です[cite: 3]。"
  },
  {
    difficulty: "soft",
    question: "【第3章】非金属の原子同士が、互いの価電子を出し合って共有することでできる結合を何というか？",
    answer: "共有結合",
    comment: "この結合において、最外殻電子を点で表したものを電子式といいます[cite: 3]。"
  },
  {
    difficulty: "soft",
    question: "【第3章】最外殻電子を点で表した式を何というか？",
    answer: "電子式",
    comment: "電子式を使うと、共有電子対や非共有電子対がわかりやすくなります[cite: 3]。"
  },
  {
    difficulty: "soft",
    question: "【第3章】結合を線（価標）で表した式を何というか？",
    answer: "構造式",
    comment: "構造式において、原子から出る線の数を原子価といいます[cite: 3]。"
  },
  {
    difficulty: "soft",
    question: "【第3章】一方の原子の非共有電子対を、もう一方の原子に一方的に提供して共有することでできる結合を何というか？",
    answer: "配位結合",
    comment: "アンモニウムイオンやオキソニウムイオンなどで見られます[cite: 3]。"
  },
  {
    difficulty: "soft",
    question: "【第3章】原子が共有電子対を引き寄せる強さのことを何というか？",
    answer: "電気陰性度",
    comment: "この違いによって分子内で電荷の偏り（極性）が生じます[cite: 3]。"
  },
  {
    difficulty: "soft",
    question: "【第3章】電気陰性度の違いによって生じる、分子内の電荷の偏りのことを何というか？",
    answer: "極性",
    comment: "電荷の偏りがある分子を極性分子と呼びます[cite: 3]。"
  },
  {
    difficulty: "soft",
    question: "【第3章】金属原子の価電子が自由に動き回るようになった電子を何というか？",
    answer: "自由電子",
    comment: "この自由電子の引力でできる結合を金属結合といいます[cite: 3]。"
  },
  {
    difficulty: "soft",
    question: "【第3章】自由電子の引力によってできる結合を何というか？",
    answer: "金属結合",
    comment: "この結合により、金属特有の性質が現れます[cite: 3]。"
  },
  {
    difficulty: "soft",
    question: "【第3章】金属特有の性質のうち、薄く広がる性質を何というか？",
    answer: "展性",
    comment: "これに加えて、線状に延びる性質を延性といいます[cite: 3]。"
  },
  {
    difficulty: "soft",
    question: "【第3章】金属特有の性質のうち、線状に延びる性質を何というか？",
    answer: "延性",
    comment: "展性や延性、電気・熱伝導性などは金属結合による性質です[cite: 3]。"
  },
  {
    difficulty: "medium",
    question: "【第3章】共有結合において、原子間で共有されている電子対を何というか？",
    answer: "共有電子対",
    comment: "電子式において共有されている部分の電子対です[cite: 3]。"
  },
  {
    difficulty: "medium",
    question: "【第3章】共有結合において、共有されていない電子対を何というか？",
    answer: "非共有電子対",
    comment: "配位結合では、この非共有電子対がもう一方の原子に提供されます[cite: 3]。"
  },
  {
    difficulty: "medium",
    question: "【第3章】構造式において、原子から出る線の数（価標の数）を何というか？",
    answer: "原子価",
    comment: "これにより、結合の様子を線で表すことができます[cite: 3]。"
  },
  {
    difficulty: "medium",
    question: "【第3章】電荷の偏りがある分子のことを何というか？",
    answer: "極性分子",
    comment: "電気陰性度の違いにより電荷の偏りが生じます[cite: 3]。"
  },
  {
    difficulty: "medium",
    question: "【第3章】形が対称的で、極性が打ち消される分子を何というか？",
    answer: "無極性分子",
    comment: "極性を持つ分子とは対照的な性質を持ちます[cite: 3]。"
  },
  {
    difficulty: "medium",
    question: "【第3章】ファンデルワールス力などのように、分子同士に働く弱い引力を何というか？",
    answer: "分子間力",
    comment: "分子結晶は、この分子間力で優しく集まってできています[cite: 3]。"
  },
  {
    difficulty: "medium",
    question: "【第3章】F、O、Nに結合したH原子がまわりの分子と作る強い結合を何というか？",
    answer: "水素結合",
    comment: "水素結合を持つ物質は沸点が異常に高くなります[cite: 3]。"
  },
  {
    difficulty: "medium",
    question: "【第3章】単量体（モノマー）が繰り返し大量につながってできた大きな物質を何というか？",
    answer: "高分子化合物",
    comment: "高分子化合物は重合体（ポリマー）とも呼ばれます[cite: 3]。"
  },
  {
    difficulty: "medium",
    question: "【第3章】高分子化合物ができる際、結合が切れてつながる反応を何というか？",
    answer: "付加重合",
    comment: "ポリエチレンは付加重合によって作られます[cite: 3]。"
  },
  {
    difficulty: "medium",
    question: "【第3章】高分子化合物ができる際、簡単な分子がとれてつながる反応を何というか？",
    answer: "縮合重合",
    comment: "PET（ポリエチレンテレフタレート）などは縮合重合によって作られます[cite: 3]。"
  },
  {
    difficulty: "medium",
    question: "【第3章】すべての原子が共有結合でガッチリつながった非常に硬い結晶を何というか？",
    answer: "共有結合の結晶",
    comment: "ダイヤモンド、黒鉛、二酸化ケイ素などがこれに分類されます[cite: 3]。"
  },
  {
    difficulty: "medium",
    question: "【第3章】分子が分子間力で優しく集まった結晶を何というか？",
    answer: "分子結晶",
    comment: "ドライアイスやヨウ素などが分子結晶の代表例です[cite: 3]。"
  },
  {
    difficulty: "medium",
    question: "【第3章】陽イオンの正電荷と陰イオンの負電荷の間の静電気的な引力でできた結晶を何というか？",
    answer: "イオン結晶",
    comment: "全体の電荷が0になる組成式で表されます[cite: 3]。"
  },
  {
    difficulty: "medium",
    question: "【第3章】金属原子の自由電子による引力でできた結晶を何というか？",
    answer: "金属結晶",
    comment: "金属光沢や電気・熱伝導性などの性質を持ちます[cite: 3]。"
  },
  {
    difficulty: "medium",
    question: "【第3章】高分子化合物を構成する、繰り返しつながる前の小さな分子のことを何というか？",
    answer: "単量体（モノマー）",
    comment: "これらが大量につながって重合体（ポリマー）が作られます[cite: 3]。"
  },
  {
    difficulty: "hard",
    question: "【第3章】塩化ナトリウム型（NaCl型）の結晶において、1つの粒子に隣り合う粒子の数（配位数）はいくつか？",
    answer: "6",
    comment: "単位格子中にはNaプラスとClマイナスがそれぞれ4個ずつ含まれます[cite: 3]。"
  },
  {
    difficulty: "hard",
    question: "【第3章】塩化ナトリウム型（NaCl型）の単位格子中に含まれるNaプラスとClマイナスの数は、それぞれいくつか？",
    answer: "4個ずつ",
    comment: "この単位格子が規則正しく配列して結晶格子を作ります[cite: 3]。"
  },
  {
    difficulty: "hard",
    question: "【第3章】HCl、CO2、N2の分子の立体的な形は何か？",
    answer: "直線形",
    comment: "分子の形状は反発によって決まります[cite: 3]。"
  },
  {
    difficulty: "hard",
    question: "【第3章】H2Oの分子の立体的な形は何か？",
    answer: "折れ線形",
    comment: "H2Oの結合角は104.5度になります[cite: 3]。"
  },
  {
    difficulty: "hard",
    question: "【第3章】NH3の分子の立体的な形は何か？",
    answer: "三角錐形",
    comment: "NH3は水素結合を持つ物質でもあります[cite: 3]。"
  },
  {
    difficulty: "hard",
    question: "【第3章】CH4の分子の立体的な形は何か？",
    answer: "正四面体形",
    comment: "都市ガスとして利用される物質です[cite: 3]。"
  },
  {
    difficulty: "hard",
    question: "【第3章】H2O分子における、水素原子と酸素原子がなす結合角は何度か？",
    answer: "104.5度",
    comment: "分子の立体的な形は折れ線形になります[cite: 3]。"
  },
  {
    difficulty: "hard",
    question: "【第3章】中心の金属イオンに、非共有電子対を持つ分子やイオンが配位結合してできた複雑なイオンを何というか？",
    answer: "錯イオン",
    comment: "配位子の名前や配位数、立体形状などを学びます[cite: 3]。"
  },
  {
    difficulty: "hard",
    question: "【第3章】錯イオンにおいて、中心の金属イオンに配位結合する分子やイオンのことを何というか？",
    answer: "配位子",
    comment: "アンミン、シアニド、アクア、ヒドロキシドなどが配位子の名前の例です[cite: 3]。"
  },
  {
    difficulty: "hard",
    question: "【第3章】H2O、HF、NH3などの水素結合を持つ物質は、分子量の割にどのような特徴があるか？",
    answer: "沸点が異常に高くなる",
    comment: "F、O、Nに結合したH原子がまわりの分子と強い結合を作るためです[cite: 3]。"
  },
  {
    difficulty: "hard",
    question: "【第3章】金属の結晶格子において、単位格子中の原子数が2であるものを2つ答えよ。",
    answer: "体心立方格子と六方最密構造",
    comment: "面心立方格子の場合は原子数が4になります[cite: 3]。"
  },
  {
    difficulty: "hard",
    question: "【第3章】金属の結晶格子において、面心立方格子の単位格子中の原子数はいくつか？",
    answer: "4",
    comment: "金属の結晶格子には規則的な配列のパターンがあります[cite: 3]。"
  },
  {
    difficulty: "hard",
    question: "【第3章】ベーキングパウダーの用途として使われる物質の化学式を答えよ。",
    answer: "NaHCO3",
    comment: "身のまわりの物質の用途として挙げられています[cite: 3]。"
  },
  {
    difficulty: "hard",
    question: "【第3章】使い捨てカイロの用途として使われる物質の化学式を答えよ。",
    answer: "Fe",
    comment: "具体的な化学式と利用目的の対応の一つです[cite: 3]。"
  },
  {
    difficulty: "hard",
    question: "【第3章】錯イオンの立体形状として学習するものを、直線形、正方形、正四面体形以外にもう一つ答えよ。",
    answer: "正八面体形",
    comment: "錯イオンの中心の金属イオンへの配位の仕方によって形が決まります[cite: 3]。"
  },
  {
    difficulty: "soft",
    question: "【第4章】12C（質量数12の炭素原子）の質量を「12」と定めて基準にし、それを元に他の原子の重さを相対的に決めた値を何というか？",
    answer: "原子的相対質量",
    comment: "これが他の原子の質量を比較する基準になります。"
  },
  {
    difficulty: "soft",
    question: "【第4章】天然に存在する同位体の相対質量を、それぞれの存在比（％）から平均して求めた、その元素固有の重さを何というか？",
    answer: "原子量",
    comment: "炭素の場合は12.01などになります。"
  },
  {
    difficulty: "soft",
    question: "【第4章】分子を構成する原子の原子量の総和を何というか？",
    answer: "分子量",
    comment: "例えばCO2の分子量は44となります。"
  },
  {
    difficulty: "soft",
    question: "【第4章】イオン式・組成式に含まれる原子量の総和を何というか？",
    answer: "式量",
    comment: "例えばNO3-の式量は62となります。"
  },
  {
    difficulty: "soft",
    question: "【第4章】原子や分子などの粒子が「6.02かける10の23乗」個集まった集団を表す単位を何というか？",
    answer: "1 mol（モル）",
    comment: "物質量を表す基本単位です。"
  },
  {
    difficulty: "soft",
    question: "【第4章】1 molの基準となる粒子の数「6.02かける10の23乗」を何と呼ぶか？",
    answer: "アボガドロ定数",
    comment: "粒子の数からmolを計算する際の土台となる定数です。"
  },
  {
    difficulty: "soft",
    question: "【第4章】物質1モル（mol）あたりの質量を何というか？",
    answer: "モル質量",
    comment: "単位は「g/mol」を使用します。"
  },
  {
    difficulty: "soft",
    question: "【第4章】物質が溶ける現象のことを何というか？",
    answer: "溶解",
    comment: "物質が溶媒に溶け込むことです。"
  },
  {
    difficulty: "soft",
    question: "【第4章】物質を溶かしている液体のことを何というか？",
    answer: "溶媒",
    comment: "溶質を溶かし込む側の液体のことです。"
  },
  {
    difficulty: "soft",
    question: "【第4章】溶媒に溶けている物質のことを何というか？",
    answer: "溶質",
    comment: "溶媒に溶け込む側の物質のことです。"
  },
  {
    difficulty: "soft",
    question: "【第4章】溶媒と溶質が混ざった液体のことを何というか？",
    answer: "溶液",
    comment: "溶質が溶媒に溶解してできた液体です。"
  },
  {
    difficulty: "soft",
    question: "【第4章】溶液全体の質量に対する、溶質の質量の割合をパーセント（％）で表したものを何というか？",
    answer: "質量パーセント濃度",
    comment: "濃度の表し方の一つです。"
  },
  {
    difficulty: "soft",
    question: "【第4章】溶液1Lあたりに含まれる溶質の物質量（mol）を表したものを何というか？",
    answer: "モル濃度",
    comment: "単位は「mol/L」を使用します。"
  },
  {
    difficulty: "soft",
    question: "【第4章】溶媒100gに溶かすことができる溶質の最大質量の数値を何というか？",
    answer: "溶解度",
    comment: "温度によって変化します。"
  },
  {
    difficulty: "soft",
    question: "【第4章】限界まで溶質を溶かした液体のことを何というか？",
    answer: "飽和溶液",
    comment: "溶解度の限界まで溶けている状態です。"
  },
  {
    difficulty: "medium",
    question: "【第4章】相対質量の基準となる、質量数12の炭素原子をどう表記するか？",
    answer: "12C",
    comment: "この原子の質量を12と定めています。"
  },
  {
    difficulty: "medium",
    question: "【第4章】炭素の原子量はいくつか？",
    answer: "12.01",
    comment: "同位体の存在比から平均して求められた値です。"
  },
  {
    difficulty: "medium",
    question: "【第4章】CO2の分子量はいくつか？",
    answer: "44",
    comment: "炭素と酸素の原子量の総和です。"
  },
  {
    difficulty: "medium",
    question: "【第4章】NO3-の式量はいくつか？",
    answer: "62",
    comment: "イオン式に含まれる原子量の総和です。"
  },
  {
    difficulty: "medium",
    question: "【第4章】モル質量の単位は何か？",
    answer: "g/mol",
    comment: "原子量・分子量・式量に単位をつけたものと同じになります。"
  },
  {
    difficulty: "medium",
    question: "【第4章】モル濃度の単位は何か？",
    answer: "mol/L",
    comment: "溶液1Lあたりの物質量（mol）を表します。"
  },
  {
    difficulty: "medium",
    question: "【第4章】標準状態において、気体の種類に関係なく、気体1モルは何Lの体積を占めるか？",
    answer: "22.4L",
    comment: "アボガドロの法則によるものです。"
  },
  {
    difficulty: "medium",
    question: "【第4章】気体の種類に関係なく、標準状態で気体1モルが22.4Lの体積を占める法則を何というか？",
    answer: "アボガドロの法則",
    comment: "物質量と気体の体積の関係を示しています。"
  },
  {
    difficulty: "medium",
    question: "【第4章】標準状態の条件として、温度は0度ともう一つ、圧力はいくらか？",
    answer: "1.013かける10の5乗Pa",
    comment: "これが標準状態の基準となります。"
  },
  {
    difficulty: "medium",
    question: "【第4章】極性の大きい物質どうしは、互いに溶けやすいか、溶けにくいか？",
    answer: "溶けやすい",
    comment: "極性の小さい物質どうしも同様に溶けやすいです。"
  },
  {
    difficulty: "medium",
    question: "【第4章】モル濃度の具体的な溶液を調製する際に用いられる器具の例は何か？",
    answer: "メスフラスコ",
    comment: "正確な体積の溶液を作るために使用されます。"
  },
  {
    difficulty: "medium",
    question: "【第4章】温度と溶解度の関係を示すグラフを何というか？",
    answer: "溶解度曲線",
    comment: "物質の溶けやすさの変化を視覚的に表したものです。"
  },
  {
    difficulty: "medium",
    question: "【第4章】原子量・分子量・式量に単位「g/mol」をつけることによって、何と同じ値になるか？",
    answer: "モル質量",
    comment: "質量から物質量を求める計算の土台となります。"
  },
  {
    difficulty: "medium",
    question: "【第4章】溶解度は、溶媒何gに溶かすことができる最大質量の数値として表されるか？",
    answer: "100g",
    comment: "溶液100gではない点に注意が必要です。"
  },
  {
    difficulty: "medium",
    question: "【第4章】「6.02かける10の23乗」という数は、粒子の数から何を計算するための基本の公式に使われるか？",
    answer: "mol（物質量）",
    comment: "アボガドロ定数を用いた計算です。"
  },
  {
    difficulty: "hard",
    question: "【第4章】結晶水をもつ物質を溶かすとき、何としての計算方法を用いる必要があるか？",
    answer: "無水物",
    comment: "結晶水の部分は溶媒の一部として扱います。"
  },
  {
    difficulty: "hard",
    question: "【第4章】温度による溶解度の違いを利用して、溶液を冷却したときに溶けきれなくなった結晶を外に取り出すことを何というか？",
    answer: "析出",
    comment: "この現象を利用した計算問題がよく出題されます。"
  },
  {
    difficulty: "hard",
    question: "【第4章】結晶の析出は、何による溶解度の違いを利用しているか？",
    answer: "温度",
    comment: "温度を変化させることで溶解度が変わる性質を利用します。"
  },
  {
    difficulty: "hard",
    question: "【第4章】水和物の溶解度計算で例として挙げられている、結晶水をもつ物質は何か？",
    answer: "硫酸銅五水和物",
    comment: "水和物の代表的な計算例として知られています。"
  },
  {
    difficulty: "hard",
    question: "【第4章】天然に存在する同位体の相対質量から原子量を求める際、それぞれの何を元にして平均して求めるか？",
    answer: "存在比（％）",
    comment: "各同位体の割合を考慮して平均値を出します。"
  },
  {
    difficulty: "hard",
    question: "【第4章】NO3-のようにイオンからなるものの重さを表す際、分子量と式量のどちらを用いるか？",
    answer: "式量",
    comment: "イオン式に含まれる原子量の総和です。"
  },
  {
    difficulty: "hard",
    question: "【第4章】質量（g）から物質量（mol）を求める計算の土台となるものは何か？",
    answer: "モル質量",
    comment: "物質1モルあたりの質量を用います。"
  },
  {
    difficulty: "hard",
    question: "【第4章】アボガドロ定数の具体的な数値はいくらか？",
    answer: "6.02かける10の23乗",
    comment: "これが1 molあたりの粒子の数になります。"
  },
  {
    difficulty: "hard",
    question: "【第4章】0度、1.013かける10の5乗Paの条件を、気体の状態として何と呼ぶか？",
    answer: "標準状態",
    comment: "この状態での気体1モルの体積は22.4Lとなります。"
  },
  {
    difficulty: "hard",
    question: "【第4章】アボガドロの法則は、どのような状態のときに成り立つとされているか？",
    answer: "同温・同圧",
    comment: "温度と圧力が一定の条件下で成り立ちます。"
  },
  {
    difficulty: "hard",
    question: "【第4章】極性の小さい物質どうしは、互いに溶けやすいか、溶けにくいか？",
    answer: "溶けやすい",
    comment: "似た性質を持つ物質同士は親和性が高いです。"
  },
  {
    difficulty: "hard",
    question: "【第4章】溶液全体の質量に対する溶質の質量の割合を求める濃度と、溶液1Lあたりの溶質の物質量を表す濃度の2つをそれぞれ何というか？",
    answer: "質量パーセント濃度とモル濃度",
    comment: "化学の計算でよく使われる2つの濃度です。"
  },
  {
    difficulty: "hard",
    question: "【第4章】溶解度を示す際に用いるのは、溶液100gではなく何の100gか？",
    answer: "溶媒の100g",
    comment: "溶媒100gに対して溶ける最大の溶質の質量です。"
  },
  {
    difficulty: "hard",
    question: "【第4章】結晶水をもつ物質を溶かすとき、無水物としての計算が必要になるのは何の計算か？",
    answer: "水和物の溶解度",
    comment: "水和水を含めた全体の質量から計算する必要があります。"
  },
  {
    difficulty: "hard",
    question: "【第4章】溶液を冷却したときに析出する結晶の計算方法は、限界まで溶かした何という状態からの変化を考えるか？",
    answer: "飽和溶液",
    comment: "飽和溶液を冷却することで、溶解度の差の分だけ結晶が析出します。"
  },
  {
    difficulty: "soft",
    question: "【第5章】化学反応式を作るとき、反応物は式のどちら側に書くか？",
    answer: "左辺",
    comment: "反応物を左辺、生成物を右辺に書いて矢印で結びます。"
  },
  {
    difficulty: "soft",
    question: "【第5章】化学反応式を作るとき、生成物は式のどちら側に書くか？",
    answer: "右辺",
    comment: "反応物を左辺、生成物を右辺に置いて化学変化を表します。"
  },
  {
    difficulty: "soft",
    question: "【第5章】化学反応式において、左辺（反応物）と右辺（生成物）は何という記号で結ぶか？",
    answer: "矢印",
    comment: "化学変化の方向を示すために矢印を用います。"
  },
  {
    difficulty: "soft",
    question: "【第5章】化学反応の前後において、反応物の総質量と生成物の総質量は変わらないという法則を何というか？",
    answer: "質量保存の法則",
    comment: "化学反応の量的な土台となる基本的な法則です。"
  },
  {
    difficulty: "soft",
    question: "【第5章】質量保存の法則を発見した化学者は誰か？",
    answer: "ラボアジエ",
    comment: "反応前後の総質量が等しいことを提唱しました。"
  },
  {
    difficulty: "soft",
    question: "【第5章】化合物を構成する成分元素の質量比はつねに一定であるという法則を何というか？",
    answer: "定比例の法則",
    comment: "どんな作り方をしても成分元素の割合は同じになります。"
  },
  {
    difficulty: "soft",
    question: "【第5章】定比例の法則を発見した化学者は誰か？",
    answer: "プルースト",
    comment: "化合物における成分元素の質量比について提唱しました。"
  },
  {
    difficulty: "soft",
    question: "【第5章】物質はそれ以上分割できない小さな粒子からなり、化学変化はその組み合わせが変わるだけだという考え方を何というか？",
    answer: "ドルトンの原子説",
    comment: "原子という粒子の存在を基礎に化学変化を説明した考え方です。"
  },
  {
    difficulty: "soft",
    question: "【第5章】2種類の元素A、Bからなる化合物が複数あるとき、Aの一定量と結合するBの質量は簡単な整数比になる法則を何というか？",
    answer: "倍数比例の法則",
    comment: "一酸化炭素と二酸化炭素の例などで説明されます。"
  },
  {
    difficulty: "soft",
    question: "【第5章】倍数比例の法則を発見した化学者は誰か？",
    answer: "ドルトン",
    comment: "原子説を提唱したドルトンが発見した法則です。"
  },
  {
    difficulty: "soft",
    question: "【第5章】反応に関係する気体の体積は、同温・同圧のもとで簡単な整数比になるという法則を何というか？",
    answer: "気体反応の法則",
    comment: "気体同士の反応における体積の規則性を示しています。"
  },
  {
    difficulty: "soft",
    question: "【第5章】気体反応の法則を発見した化学者は誰か？",
    answer: "ゲーリュサック",
    comment: "同温・同圧での気体の体積比に関する法則を提唱しました。"
  },
  {
    difficulty: "soft",
    question: "【第5章】同温・同圧・同体積の気体には、気体の種類に関係なく、同数の分子が含まれるという法則を何というか？",
    answer: "アボガドロの法則",
    comment: "気体の体積と分子の数に関する重要な法則です。"
  },
  {
    difficulty: "soft",
    question: "【第5章】アボガドロの法則を発見した化学者は誰か？",
    answer: "アボガドロ",
    comment: "分子というまとまりを考えて、気体の性質を説明しました。"
  },
  {
    difficulty: "soft",
    question: "【第5章】反応に関係するイオンに注目して、イオンの化学式を用いて表した式を何というか？",
    answer: "イオン反応式",
    comment: "塩化銀の沈殿反応などを表す際によく用いられます。"
  },
  {
    difficulty: "medium",
    question: "【第5章】化学反応式を作るとき、矢印の両辺で各原子の数がどうなるように係数をつけるか？",
    answer: "一致するように",
    comment: "反応前後で原子が消滅したり新しく生まれたりしないためです。"
  },
  {
    difficulty: "medium",
    question: "【第5章】化学反応式において、係数はどのような比になるようにつけるのがルールか？",
    answer: "最も簡単な整数比",
    comment: "分数になった場合は、全体を整数倍して調整します。"
  },
  {
    difficulty: "medium",
    question: "【第5章】化学反応式の係数において、省略される数字はいくつか？",
    answer: "1",
    comment: "係数が1になる場合は書き込みません。"
  },
  {
    difficulty: "medium",
    question: "【第5章】過酸化水素の分解反応において、酸化マンガン4はどのような働きをする物質か？",
    answer: "触媒",
    comment: "反応を促進しますが、それ自身は変化しません。"
  },
  {
    difficulty: "medium",
    question: "【第5章】イオン反応式の具体例として、何という物質の沈殿反応が挙げられているか？",
    answer: "塩化銀",
    comment: "AgClの沈殿はイオンに注目して式を作ります。"
  },
  {
    difficulty: "medium",
    question: "【第5章】化学反応式の係数の比は、反応に関係する「物質量（mol）の比」と、あと2つ何の比と一致するか？",
    answer: "粒子の数（分子の数）の比と気体の体積（L）の比",
    comment: "これらはすべて正比例の関係にあります。"
  },
  {
    difficulty: "medium",
    question: "【第5章】化学反応式の係数の比を利用して、反応・生成する物質の何を計算することができるか？",
    answer: "量",
    comment: "量的関係の計算問題の土台となります。"
  },
  {
    difficulty: "medium",
    question: "【第5章】化学反応式の係数の比は、「物質量」や「気体の体積」の比と一致するが、何の比とは一致しないか？",
    answer: "質量の比",
    comment: "物質ごとにモル質量（重さ）が異なるため、質量の比は係数比と一致しません。"
  },
  {
    difficulty: "medium",
    question: "【第5章】定比例の法則の具体例として、何と何の反応が挙げられているか？",
    answer: "銅と酸素",
    comment: "酸化銅ができる際、結合する質量の割合は常に一定です。"
  },
  {
    difficulty: "medium",
    question: "【第5章】倍数比例の法則の具体例として挙げられている、2種類の化合物は何か？",
    answer: "一酸化炭素COと二酸化炭素CO2",
    comment: "同じ炭素Cと酸素Oからなる化合物の比較です。"
  },
  {
    difficulty: "medium",
    question: "【第5章】アボガドロの法則において、気体の種類に関係なく分子の数が同じになるのは、どのような条件が揃ったときか？",
    answer: "同温・同圧・同体積",
    comment: "この3つの条件が揃うと、中に含まれる分子の数も等しくなります。"
  },
  {
    difficulty: "medium",
    question: "【第5章】ドルトンの原子説において、化学変化とは原子がどうなることだと説明されているか？",
    answer: "組み合わせが変わるだけ",
    comment: "原子そのものが別のものに変わるわけではありません。"
  },
  {
    difficulty: "medium",
    question: "【第5章】ドルトンの原子説によると、化学変化において原子は新しく生まれたり、もう一つどうなったりしないと考えられているか？",
    answer: "消滅したりしない",
    comment: "質量保存の法則が成り立つ根拠にもなっています。"
  },
  {
    difficulty: "medium",
    question: "【第5章】化学反応式の係数の比が一致する「粒子の数」とは、具体的に何の数のことを指しているか？",
    answer: "分子の数",
    comment: "気体などの反応において分子単位で考えます。"
  },
  {
    difficulty: "medium",
    question: "【第5章】酸化マンガン4を触媒として用いる具体例の反応は何か？",
    answer: "過酸化水素の分解",
    comment: "酸素を発生させるための代表的な反応です。"
  },
  {
    difficulty: "hard",
    question: "【第5章】過酸化水素の分解における酸化マンガン4などの触媒は、反応式の中でどのように扱うルールか？",
    answer: "変化しないため、反応式の上には書かない",
    comment: "反応物でも生成物でもないため、式の中に組み込みません。"
  },
  {
    difficulty: "hard",
    question: "【第5章】質量保存の法則において、化学反応の前後で変わらないとされるのは「反応物の何」と「生成物の何」か？",
    answer: "総質量",
    comment: "それぞれの側の合計質量が必ず一致します。"
  },
  {
    difficulty: "hard",
    question: "【第5章】倍数比例の法則が適用されるのは、何種類の元素からなる化合物が複数あるときか？",
    answer: "2種類",
    comment: "AとBの2種類の元素で構成されていることが前提です。"
  },
  {
    difficulty: "hard",
    question: "【第5章】倍数比例の法則において、簡単な整数比になるのは、Aの一定量と結合する何についてか？",
    answer: "Bの質量",
    comment: "一方の質量を固定したとき、もう一方の質量が整数比になります。"
  },
  {
    difficulty: "hard",
    question: "【第5章】定比例の法則において、つねに一定であるのは化合物を構成する成分元素の何か？",
    answer: "質量比",
    comment: "どこで採取しても、成分の質量の割合は変わりません。"
  },
  {
    difficulty: "hard",
    question: "【第5章】気体反応の法則において、反応に関係する気体の体積が簡単な整数比になるための条件は何か？",
    answer: "同温・同圧のもと",
    comment: "温度と圧力が同じ状態であることが必要です。"
  },
  {
    difficulty: "hard",
    question: "【第5章】ゲーリュサックが提唱した気体反応の法則は、反応に関係する気体の何についての法則か？",
    answer: "体積",
    comment: "係数の比が体積の比になるという事実と結びついています。"
  },
  {
    difficulty: "hard",
    question: "【第5章】アボガドロの法則において、同温・同圧・同体積の気体に含まれるものは、気体の種類に関係なく同数の何か？",
    answer: "分子",
    comment: "原子ではなく、分子単位で同数になります。"
  },
  {
    difficulty: "hard",
    question: "【第5章】アボガドロの法則は、気体の何に関係なく成り立つとされているか？",
    answer: "気体の種類",
    comment: "酸素でも水素でも二酸化炭素でも同じルールが適用されます。"
  },
  {
    difficulty: "hard",
    question: "【第5章】化学反応式の係数の比は質量の比とは一致しないが、化学反応の前後で何という法則は成り立つか？",
    answer: "質量保存の法則",
    comment: "質量の比と係数比は違いますが、全体の総質量は保存されます。"
  },
  {
    difficulty: "hard",
    question: "【第5章】ドルトンの原子説において、物質を構成する「原子」はどのような粒子だと定義されているか？",
    answer: "それ以上分割できない小さな粒子",
    comment: "物質の基本単位としての性質を示しています。"
  },
  {
    difficulty: "hard",
    question: "【第5章】イオン反応式は、反応に関係するイオンに注目し、何を用いて表した式か？",
    answer: "イオンの化学式",
    comment: "イオンの記号（電荷を含めた形）を使って記述します。"
  },
  {
    difficulty: "hard",
    question: "【第5章】倍数比例の法則の例である一酸化炭素と二酸化炭素を、それぞれの化学式で答えよ。",
    answer: "COとCO2",
    comment: "炭素一定量に対する酸素の質量の比が1：2になります。"
  },
  {
    difficulty: "hard",
    question: "【第5章】イオン反応式の例として挙げられている塩化銀を、化学式で答えよ。",
    answer: "AgCl",
    comment: "銀イオンと塩化物イオンが結びついてできる沈殿です。"
  },
  {
    difficulty: "hard",
    question: "【第5章】化学反応式で係数をつける目的は、反応式の両辺で何が一致するようにするためか？",
    answer: "各原子の数",
    comment: "ドルトンの原子説に基づく重要な作業です。"
  },
  {
    difficulty: "soft",
    question: "【第6章】水に溶けて水素イオン（H+）を生じる物質を酸、水に溶けて水酸化物イオン（OH-）を生じる物質を塩基とする定義を何というか？",
    answer: "アレニウスの定義",
    comment: "水溶液の反応において基本となる定義です。"
  },
  {
    difficulty: "soft",
    question: "【第6章】水素イオン（H+）を与える分子やイオンを「酸」、受け取る分子やイオンを「塩基」とする定義を何というか？",
    answer: "ブレンステッド・ローリーの定義",
    comment: "水溶液以外の反応にも適用できるように拡張された定義です。"
  },
  {
    difficulty: "soft",
    question: "【第6章】酸の1化学式あたりから生じるH+の数、または塩基の1化学式あたりから生じるOH-の数を何というか？",
    answer: "価数",
    comment: "放出できるイオンの数によって、1価、2価、3価に分類されます。"
  },
  {
    difficulty: "soft",
    question: "【第6章】水に溶かした電解質（酸・塩基）のうち、電離した（イオンに分かれた）物質の割合を何というか？",
    answer: "電離度",
    comment: "記号のアルファで表されます。"
  },
  {
    difficulty: "soft",
    question: "【第6章】電離度を表す際によく用いられるギリシャ文字の記号（読み方）は何か？",
    answer: "アルファ",
    comment: "強酸や強塩基ではほぼ1、弱酸や弱塩基では0にきわめて近くなります。"
  },
  {
    difficulty: "soft",
    question: "【第6章】水溶液中でほぼすべてが電離しており、電離度がほぼ1である酸や塩基をまとめて何というか？",
    answer: "強酸・強塩基",
    comment: "HClやNaOHなどがこれに該当します。"
  },
  {
    difficulty: "soft",
    question: "【第6章】水溶液中でごく一部しか電離しておらず、電離度が0にきわめて近い酸や塩基をまとめて何というか？",
    answer: "弱酸・弱塩基",
    comment: "CH3COOHやNH3などがこれに該当します。"
  },
  {
    difficulty: "soft",
    question: "【第6章】HClやH2SO4は、強酸と弱酸のどちらに分類されるか？",
    answer: "強酸",
    comment: "水溶液中でほぼ完全に電離してH+を生じます。"
  },
  {
    difficulty: "soft",
    question: "【第6章】CH3COOHは、強酸と弱酸のどちらに分類されるか？",
    answer: "弱酸",
    comment: "水溶液中ではごく一部しか電離しません。"
  },
  {
    difficulty: "soft",
    question: "【第6章】NaOHは、強塩基と弱塩基のどちらに分類されるか？",
    answer: "強塩基",
    comment: "水溶液中でほぼ完全に電離してOH-を生じます。"
  },
  {
    difficulty: "soft",
    question: "【第6章】NH3は、強塩基と弱塩基のどちらに分類されるか？",
    answer: "弱塩基",
    comment: "水溶液中ではごく一部しか電離しません。"
  },
  {
    difficulty: "soft",
    question: "【第6章】ブレンステッド・ローリーの定義において、酸とは水素イオン（H+）をどうする分子やイオンのことか？",
    answer: "与える",
    comment: "水素イオンを相手に渡す働きをします。"
  },
  {
    difficulty: "soft",
    question: "【第6章】ブレンステッド・ローリーの定義において、塩基とは水素イオン（H+）をどうする分子やイオンのことか？",
    answer: "受け取る",
    comment: "相手から水素イオンをもらう働きをします。"
  },
  {
    difficulty: "soft",
    question: "【第6章】アレニウスの定義において、水に溶けて水酸化物イオン（OH-）を生じる物質を何というか？",
    answer: "塩基",
    comment: "塩基はアルカリと呼ばれることもあります。"
  },
  {
    difficulty: "soft",
    question: "【第6章】アレニウスの定義において、水に溶けて水素イオン（H+）を生じる物質を何というか？",
    answer: "酸",
    comment: "水溶液中で酸性を示す原因となる物質です。"
  },
  {
    difficulty: "medium",
    question: "【第6章】25度において、純粋な水における水素イオン濃度と水酸化物イオン濃度の積を何というか？",
    answer: "水のイオン積",
    comment: "温度が一定であれば、常につねに一定の値になります。"
  },
  {
    difficulty: "medium",
    question: "【第6章】25度における水のイオン積の値は、つねにいくらで一定になるか？",
    answer: "1.0かける10のマイナス14乗",
    comment: "この関係を用いて、一方の濃度から他方の濃度を計算できます。"
  },
  {
    difficulty: "medium",
    question: "【第6章】水溶液の水素イオン濃度を表す数値で、酸性・中性・塩基性の強さを示すものを何というか？",
    answer: "pH（水素イオン指数）",
    comment: "0から14までの数値で表されることが多いです。"
  },
  {
    difficulty: "medium",
    question: "【第6章】水溶液のpHが7であるとき、その水溶液の性質（液性）は何か？",
    answer: "中性",
    comment: "純粋な水などはこの値を示します。"
  },
  {
    difficulty: "medium",
    question: "【第6章】水溶液のpHが7より小さいとき、その水溶液の性質（液性）は何か？",
    answer: "酸性",
    comment: "数値が小さいほど強い酸性を示します。"
  },
  {
    difficulty: "medium",
    question: "【第6章】水溶液のpHが7より大きいとき、その水溶液の性質（液性）は何か？",
    answer: "塩基性（アルカリ性）",
    comment: "数値が大きいほど強い塩基性を示します。"
  },
  {
    difficulty: "medium",
    question: "【第6章】酸から生じたH+と、塩基から生じたOH-が結合して水を生成する反応を何というか？",
    answer: "中和反応",
    comment: "酸と塩基が互いの性質を打ち消し合う反応です。"
  },
  {
    difficulty: "medium",
    question: "【第6章】中和反応において、酸の陰イオンと塩基の陽イオンが結びついてできた化合物を何というか？",
    answer: "塩（えん）",
    comment: "食塩（NaCl）も塩の一種です。"
  },
  {
    difficulty: "medium",
    question: "【第6章】化学式の中に酸のHが残っている塩を何というか？",
    answer: "酸性塩",
    comment: "必ずしも水溶液が酸性になるとは限りません。"
  },
  {
    difficulty: "medium",
    question: "【第6章】化学式の中に塩基のOHが残っている塩を何というか？",
    answer: "塩基性塩",
    comment: "MgCl(OH)などがこれに該当します。"
  },
  {
    difficulty: "medium",
    question: "【第6章】化学式の中に酸のHも塩基のOHも残っていない塩を何というか？",
    answer: "正塩",
    comment: "NaClやNa2CO3などがこれに該当します。"
  },
  {
    difficulty: "medium",
    question: "【第6章】NaHCO3は、酸性塩・塩基性塩・正塩のどれに分類されるか？",
    answer: "酸性塩",
    comment: "化学式の中にHが残っています。"
  },
  {
    difficulty: "medium",
    question: "【第6章】MgCl(OH)は、酸性塩・塩基性塩・正塩のどれに分類されるか？",
    answer: "塩基性塩",
    comment: "化学式の中にOHが残っています。"
  },
  {
    difficulty: "medium",
    question: "【第6章】NaClは、酸性塩・塩基性塩・正塩のどれに分類されるか？",
    answer: "正塩",
    comment: "化学式の中にHもOHも残っていません。"
  },
  {
    difficulty: "medium",
    question: "【第6章】弱酸や弱塩基からできた塩のイオンが水と反応して、水溶液が塩基性や酸性を示す現象を何というか？",
    answer: "塩の加水分解",
    comment: "塩が水に溶けたときの液性を決める重要な反応です。"
  },
  {
    difficulty: "hard",
    question: "【第6章】弱酸の塩に強酸を加えたとき、弱酸がフリーな状態になって追い出される反応を何というか？",
    answer: "弱酸の遊離",
    comment: "強い酸が優先して塩をつくるために起こります。"
  },
  {
    difficulty: "hard",
    question: "【第6章】弱塩基の塩に強塩基を加えたとき、何がフリーな状態になって追い出される（遊離する）か？",
    answer: "弱塩基",
    comment: "アンモニアの発生実験などで利用される原理です。"
  },
  {
    difficulty: "hard",
    question: "【第6章】中和反応において、完全に中和するのは、酸から生じるH+の物質量と、何から生じる何の物質量が等しくなるときか？",
    answer: "塩基から生じるOH-の物質量",
    comment: "これが中和滴定の量的関係の計算の土台になります。"
  },
  {
    difficulty: "hard",
    question: "【第6章】中和滴定の計算において、「酸の価数かけるモル濃度かける体積」は何と等しくなるように式を立てるか？",
    answer: "塩基の価数かけるモル濃度かける体積",
    comment: "両辺のH+とOH-の物質量が等しくなる関係式です。"
  },
  {
    difficulty: "hard",
    question: "【第6章】中和滴定の実験で用いられる器具のうち、テキストで挙げられているものをすべて答えよ（3つ）。",
    answer: "ホールピペット、ビュレット、コニカルビーカー",
    comment: "これらは共洗いの有無など、正しい扱い方を覚える必要があります。"
  },
  {
    difficulty: "hard",
    question: "【第6章】中和滴定の実験器具において、使用する前に内部をその溶液で洗う操作のことを何というか？",
    answer: "共洗い",
    comment: "器具によって共洗いが必要なものと、水洗いだけでよいものがあります。"
  },
  {
    difficulty: "hard",
    question: "【第6章】指示薬が、溶液のpHによって色が変わる範囲のことを何というか？",
    answer: "変色域",
    comment: "中和点のpHがこの変色域に含まれるような指示薬を選択します。"
  },
  {
    difficulty: "hard",
    question: "【第6章】中和滴定で用いられる指示薬として、テキストで挙げられているものを2つ答えよ。",
    answer: "メチルオレンジ、フェノールフタレイン",
    comment: "酸と塩基の強弱の組み合わせによって適切に使い分けます。"
  },
  {
    difficulty: "hard",
    question: "【第6章】中和滴定において、滴定で加えた酸や塩基の体積と、溶液のpHの変化を表したグラフを何というか？",
    answer: "滴定曲線",
    comment: "酸と塩基の組み合わせによってグラフの形が異なります。"
  },
  {
    difficulty: "hard",
    question: "【第6章】滴定曲線において、中和点付近でpHが急激に変化する部分を何というか？",
    answer: "pHジャンプ",
    comment: "このpHジャンプの大きさや位置も、強弱の組み合わせで変わります。"
  },
  {
    difficulty: "hard",
    question: "【第6章】炭酸ナトリウム（Na2CO3）を強酸で滴定したときの滴定曲線は、何段階で中和が起こるか？",
    answer: "二段階",
    comment: "特殊な滴定曲線として、二つのpHジャンプが見られます。"
  },
  {
    difficulty: "hard",
    question: "【第6章】塩が水に溶けたとき、水溶液の液性を決めるのは、もとの酸と塩基の何の組み合わせか？",
    answer: "強弱の組み合わせ",
    comment: "例えば強酸と弱塩基の塩であれば、水溶液は酸性を示します。"
  },
  {
    difficulty: "hard",
    question: "【第6章】強酸と強塩基、弱酸と強塩基などの組み合わせによって、滴定曲線の何とグラフの形が異なるか？",
    answer: "中和点のpH",
    comment: "中和点が必ずしもpH7になるとは限らないためです。"
  },
  {
    difficulty: "hard",
    question: "【第6章】二段階で中和が起こる特殊な滴定曲線をもつ物質としてテキストで挙げられている物質の名称と化学式を答えよ。",
    answer: "炭酸ナトリウム（Na2CO3）",
    comment: "第一段階と第二段階でそれぞれ異なる指示薬を用いて中和点を確認します。"
  },
  {
    difficulty: "hard",
    question: "【第6章】アレニウスの定義とブレンステッド・ローリーの定義のうち、水溶液以外の反応にも適用できるのはどちらか？",
    answer: "ブレンステッド・ローリーの定義",
    comment: "水素イオンのやり取りに注目しているため、水以外の溶媒でも考えられます。"
  },
  {
    difficulty: "soft",
    question: "【第7章】物質が酸素と結びつく反応を何というか？",
    answer: "酸化",
    comment: "酸素の授受による定義です。"
  },
  {
    difficulty: "soft",
    question: "【第7章】物質が酸素を失う反応を何というか？",
    answer: "還元",
    comment: "酸素の授受による定義です。"
  },
  {
    difficulty: "soft",
    question: "【第7章】物質が水素を失う反応を何というか？",
    answer: "酸化",
    comment: "水素の授受による定義です。"
  },
  {
    difficulty: "soft",
    question: "【第7章】物質が水素と結びつく反応を何というか？",
    answer: "還元",
    comment: "水素の授受による定義です。"
  },
  {
    difficulty: "soft",
    question: "【第7章】原子や物質が電子（e-）を失う反応を何というか？",
    answer: "酸化",
    comment: "電子の授受による定義です。"
  },
  {
    difficulty: "soft",
    question: "【第7章】原子や物質が電子（e-）を受け取る反応を何というか？",
    answer: "還元",
    comment: "電子の授受による定義です。"
  },
  {
    difficulty: "soft",
    question: "【第7章】物質の酸化数が増加する反応を何というか？",
    answer: "酸化",
    comment: "酸化数の増減による定義です。"
  },
  {
    difficulty: "soft",
    question: "【第7章】物質の酸化数が減少する反応を何というか？",
    answer: "還元",
    comment: "酸化数の増減による定義です。"
  },
  {
    difficulty: "soft",
    question: "【第7章】単体中の原子の酸化数はいくつか？",
    answer: "0",
    comment: "H2やCuなど、単体であれば常に0になります。"
  },
  {
    difficulty: "soft",
    question: "【第7章】化合物中の水素原子（H）の酸化数は、原則としていくつか？",
    answer: "プラス1",
    comment: "一部の例外を除き、化合物中のHは+1として計算します。"
  },
  {
    difficulty: "soft",
    question: "【第7章】化合物中の酸素原子（O）の酸化数は、原則としていくつか？",
    answer: "マイナス2",
    comment: "一部の例外を除き、化合物中のOは-2として計算します。"
  },
  {
    difficulty: "soft",
    question: "【第7章】化合物中の各原子の酸化数の総和はいくつか？",
    answer: "0",
    comment: "全体として電荷を持たないため、総和は0になります。"
  },
  {
    difficulty: "soft",
    question: "【第7章】単原子イオンの酸化数は、何と等しくなるか？",
    answer: "そのイオンの電荷",
    comment: "イオンが持つプラスやマイナスの値がそのまま酸化数になります。"
  },
  {
    difficulty: "soft",
    question: "【第7章】相手の物質を酸化する物質を何というか？",
    answer: "酸化剤",
    comment: "相手を酸化する代わりに、自身は還元されます。"
  },
  {
    difficulty: "soft",
    question: "【第7章】相手の物質を還元する物質を何というか？",
    answer: "還元剤",
    comment: "相手を還元する代わりに、自身は酸化されます。"
  },
  {
    difficulty: "medium",
    question: "【第7章】H2やCuなど、単体の物質の酸化数はいくつか？",
    answer: "0",
    comment: "単体の酸化数はすべて0になります。"
  },
  {
    difficulty: "medium",
    question: "【第7章】Na+の酸化数はいくつか？",
    answer: "プラス1",
    comment: "単原子イオンなので、電荷がそのまま酸化数になります。"
  },
  {
    difficulty: "medium",
    question: "【第7章】Cu2+の酸化数はいくつか？",
    answer: "プラス2",
    comment: "単原子イオンのルールに従います。"
  },
  {
    difficulty: "medium",
    question: "【第7章】O2-の酸化数はいくつか？",
    answer: "マイナス2",
    comment: "単原子イオンのルールに従います。"
  },
  {
    difficulty: "medium",
    question: "【第7章】過酸化水素（H2O2）の酸素原子の酸化数はいくつか？",
    answer: "マイナス1",
    comment: "通常の「マイナス2」とは異なる例外パターンです。"
  },
  {
    difficulty: "medium",
    question: "【第7章】水素化ナトリウム（NaH）の水素原子の酸化数はいくつか？",
    answer: "マイナス1",
    comment: "通常の「プラス1」とは異なる例外パターンです。"
  },
  {
    difficulty: "medium",
    question: "【第7章】酸化剤が反応するとき、酸化剤自身の酸化数は増加するか、減少するか？",
    answer: "減少する",
    comment: "自身は還元されるため、酸化数は減少します。"
  },
  {
    difficulty: "medium",
    question: "【第7章】還元剤が反応するとき、還元剤自身の酸化数は増加するか、減少するか？",
    answer: "増加する",
    comment: "自身は酸化されるため、酸化数は増加します。"
  },
  {
    difficulty: "medium",
    question: "【第7章】塩素（Cl2）やオゾン（O3）は、主に酸化剤と還元剤のどちらとして働くか？",
    answer: "酸化剤",
    comment: "相手から電子を奪いやすい物質です。"
  },
  {
    difficulty: "medium",
    question: "【第7章】ナトリウム（Na）や水素（H2）は、主に酸化剤と還元剤のどちらとして働くか？",
    answer: "還元剤",
    comment: "相手に電子を与えやすい物質です。"
  },
  {
    difficulty: "medium",
    question: "【第7章】過酸化水素（H2O2）や二酸化硫黄（SO2）は、KMnO4のような強い酸化剤が相手のときは何として働くか？",
    answer: "還元剤",
    comment: "相手によって働きが変わる特殊な物質です。"
  },
  {
    difficulty: "medium",
    question: "【第7章】ハロゲンの単体（Cl2、Br2、I2）の中で、酸化力が最も強いのはどれか？",
    answer: "Cl2",
    comment: "「Cl2 ＞ Br2 ＞ I2」の順になります。"
  },
  {
    difficulty: "medium",
    question: "【第7章】ヨウ化カリウム（KI）水溶液にCl2を加えると反応して追い出される物質は何か？",
    answer: "I2",
    comment: "Cl2の方が酸化力が強いため反応が起こります。"
  },
  {
    difficulty: "medium",
    question: "【第7章】電子（e-）を含んだ、酸化剤・還元剤それぞれの働きを表す式を何というか？",
    answer: "半反応式",
    comment: "この式を組み合わせることで酸化還元反応の式を作ります。"
  },
  {
    difficulty: "medium",
    question: "【第7章】酸化還元反応全体において、酸化剤が受け取る電子の物質量（mol）は、何と等しくなるか？",
    answer: "還元剤が失う電子の物質量（mol）",
    comment: "この関係が滴定などの計算の基本になります。"
  },
  {
    difficulty: "hard",
    question: "【第7章】多原子イオンの中の各原子の酸化数の総和は、何と等しくなるか？",
    answer: "そのイオンの電荷",
    comment: "化合物全体が0になるルールとは異なるため注意が必要です。"
  },
  {
    difficulty: "hard",
    question: "【第7章】半反応式の作り方において、反応前後の物質を書いた後、電子（e-）を加える基準となるのは何の数値の変化か？",
    answer: "酸化数の変化",
    comment: "酸化数が増減した分だけ電子を加えます。"
  },
  {
    difficulty: "hard",
    question: "【第7章】半反応式の作り方において、電子を加えた後に左右の電荷を合わせるために加えるイオンは何か？",
    answer: "水素イオン（H+）",
    comment: "酸性条件での反応式を作るときの手順です。"
  },
  {
    difficulty: "hard",
    question: "【第7章】半反応式の作り方の最後のステップとして、HとOの数を合わせるために加える物質は何か？",
    answer: "水（H2O）",
    comment: "これで半反応式が完成します。"
  },
  {
    difficulty: "hard",
    question: "【第7章】過マンガン酸カリウムによる滴定で、水溶液を酸性にするために用いられる酸は何か？",
    answer: "硫酸",
    comment: "これを「硫酸酸性」と呼びます。"
  },
  {
    difficulty: "hard",
    question: "【第7章】過マンガン酸滴定において、酸性にするために塩酸を使うことが不適切なのはなぜか？",
    answer: "自身が酸化されて塩素が発生するため",
    comment: "塩酸が還元剤として働いてしまい、正確な測定ができません。"
  },
  {
    difficulty: "hard",
    question: "【第7章】過マンガン酸滴定において、酸性にするために硝酸を使うことが不適切なのはなぜか？",
    answer: "自身が酸化剤として働いてしまうため",
    comment: "硝酸が別の酸化反応を起こしてしまい、正確な測定ができません。"
  },
  {
    difficulty: "hard",
    question: "【第7章】過マンガン酸滴定の終点は、滴下した過マンガン酸カリウムの何色が消えなくなったところとするか？",
    answer: "赤紫色",
    comment: "MnO4-の色であり、指示薬は不要です。"
  },
  {
    difficulty: "hard",
    question: "【第7章】過マンガン酸カリウム水溶液の滴定において、褐色ビュレットを使う理由は、光で分解して何に変化する性質があるからか？",
    answer: "二酸化マンガン",
    comment: "濃度が変化してしまうのを防ぐためです。"
  },
  {
    difficulty: "hard",
    question: "【第7章】ヨウ素滴定において、ヨウ素（I2）と反応させる還元剤としてテキストに挙げられている物質は何か？",
    answer: "チオ硫酸ナトリウム（Na2S2O3）",
    comment: "この反応を利用して濃度を決定します。"
  },
  {
    difficulty: "hard",
    question: "【第7章】ヨウ素滴定の終点を確認するために利用する反応は何か？",
    answer: "ヨウ素デンプン反応",
    comment: "デンプンを指示薬として用います。"
  },
  {
    difficulty: "hard",
    question: "【第7章】ヨウ素滴定では、ヨウ素デンプン反応による何色が消える瞬間を終点とするか？",
    answer: "青紫色",
    comment: "ヨウ素が完全に消費されたことを示します。"
  },
  {
    difficulty: "hard",
    question: "【第7章】水中の有機物を酸化分解するのに必要な酸素量を表す「化学的酸素要求量」のアルファベット3文字の略称は何か？",
    answer: "COD",
    comment: "環境指標の一つとして測定されます。"
  },
  {
    difficulty: "hard",
    question: "【第7章】水中の環境指標のうち、「溶存酸素」を表すアルファベット2文字の略称は何か？",
    answer: "DO",
    comment: "水中に溶けている酸素の量を示します。"
  },
  {
    difficulty: "hard",
    question: "【第7章】水中の環境指標のうち、「生物化学的酸素要求量」を表すアルファベット3文字の略称は何か？",
    answer: "BOD",
    comment: "微生物が有機物を分解する際に消費する酸素量を示します。"
  },
  {
    difficulty: "soft",
    question: "【第8章】金属が水の中で電子を放出して陽イオンになろうとする強さの順を並べたものを何というか？",
    answer: "イオン化傾向（イオン化列）",
    comment: "リチウム（Li）が最も大きく、金（Au）が最も小さい性質を持っています。"
  },
  {
    difficulty: "soft",
    question: "【第8章】イオン化列において、イオン化傾向が最も大きい金属は何か？",
    answer: "リチウム（Li）",
    comment: "水の中で最も電子を放出して陽イオンになりやすい金属です。"
  },
  {
    difficulty: "soft",
    question: "【第8章】イオン化列において、イオン化傾向が最も小さい金属は何か？",
    answer: "金（Au）",
    comment: "非常に安定しており、王水にしか溶けない性質を持ちます。"
  },
  {
    difficulty: "soft",
    question: "【第8章】イオン化傾向が大きい金属ほど、酸化されやすいか、還元されやすいか？",
    answer: "酸化されやすい",
    comment: "電子を放出して陽イオンになる反応は酸化反応です。"
  },
  {
    difficulty: "soft",
    question: "【第8章】イオン化傾向の異なる2種類の金属を電極とし、化学エネルギーを何エネルギーに変換する装置を電池というか？",
    answer: "電気エネルギー",
    comment: "化学反応を利用して電気を取り出します。"
  },
  {
    difficulty: "soft",
    question: "【第8章】電池において、電子を放出して溶ける電極を何極というか？",
    answer: "負極",
    comment: "放出された電子が導線を通ってもう一方の電極へ移動します。"
  },
  {
    difficulty: "soft",
    question: "【第8章】電池の負極で起こるのは、酸化反応と還元反応のどちらか？",
    answer: "酸化反応",
    comment: "金属が電子を放出して溶けるため酸化反応となります。"
  },
  {
    difficulty: "soft",
    question: "【第8章】電池の正極で起こるのは、酸化反応と還元反応のどちらか？",
    answer: "還元反応",
    comment: "電解液中のイオンなどが電子を受け取ります。"
  },
  {
    difficulty: "soft",
    question: "【第8章】外部から直流電源をつなぎ、電気エネルギーを与えて酸化還元反応を強制的に起こす操作を何というか？",
    answer: "電気分解（電解）",
    comment: "電池とは逆に、電気を使って化学反応を起こします。"
  },
  {
    difficulty: "soft",
    question: "【第8章】電気分解において、電源の正極につないだ電極を何というか？",
    answer: "陽極",
    comment: "電子を奪われるため、酸化反応が起こります。"
  },
  {
    difficulty: "soft",
    question: "【第8章】電気分解において、電源の負極につないだ電極を何というか？",
    answer: "陰極",
    comment: "電子を与えられるため、還元反応が起こります。"
  },
  {
    difficulty: "soft",
    question: "【第8章】鉛蓄電池のように、充電することで繰り返し使える電池を何電池というか？",
    answer: "二次電池",
    comment: "車のバッテリーなどに使われています。"
  },
  {
    difficulty: "soft",
    question: "【第8章】電流（A）と時間（s）を掛け合わせて求められる量を何というか？",
    answer: "電気量",
    comment: "流れた電子の総量を表す指標となります。"
  },
  {
    difficulty: "soft",
    question: "【第8章】電気量の単位として用いられる「C」は何と読むか？",
    answer: "クーロン",
    comment: "アンペア（A）と秒（s）の積で表されます。"
  },
  {
    difficulty: "soft",
    question: "【第8章】電子1molあたりが持つ電気量のことを何定数というか？",
    answer: "ファラデー定数",
    comment: "物質の変化量を計算する際に用います。"
  },
  {
    difficulty: "medium",
    question: "【第8章】ダニエル電池において、2つの電解液を分けるために使用される板は何か？",
    answer: "素焼き板",
    comment: "2種類の電解液が混ざり合うのを防ぎつつ、イオンを通過させます。"
  },
  {
    difficulty: "medium",
    question: "【第8章】水素と酸素から水を作る反応を利用して発電する電池は何か？",
    answer: "燃料電池",
    comment: "反応生成物が水のみであるため、クリーンなエネルギーとして注目されています。"
  },
  {
    difficulty: "medium",
    question: "【第8章】電池において、負極になるのは2つの金属のうちイオン化傾向が大きい方か、小さい方か？",
    answer: "大きい方",
    comment: "イオン化傾向が大きい金属の方が溶けやすいためです。"
  },
  {
    difficulty: "medium",
    question: "【第8章】電池の正極では、何が電子を受け取ることで還元反応が起こるか？",
    answer: "電解液中のイオンなど",
    comment: "導線を通ってきた電子を受け取ります。"
  },
  {
    difficulty: "medium",
    question: "【第8章】電気分解の陽極で起こる反応は、電子を与えられる反応か、電子を奪われる反応か？",
    answer: "電子を奪われる反応",
    comment: "電源の正極に電子が引き抜かれるため、酸化反応になります。"
  },
  {
    difficulty: "medium",
    question: "【第8章】電気分解の陰極で起こる反応は、電子を与えられる反応か、電子を奪われる反応か？",
    answer: "電子を与えられる反応",
    comment: "電源の負極から電子が流れ込んでくるため、還元反応になります。"
  },
  {
    difficulty: "medium",
    question: "【第8章】電気分解の陽極に銅（Cu）や銀（Ag）を使用した場合、電極自体はどうなるか？",
    answer: "溶ける",
    comment: "電極自身の金属がイオンとなって溶け出します。"
  },
  {
    difficulty: "medium",
    question: "【第8章】電気分解の陽極が白金（Pt）で、溶液中に塩化物イオン（Cl-）などのハロゲン化物イオンがある場合、何が発生するか？",
    answer: "ハロゲン単体",
    comment: "塩素（Cl2）などの気体が発生します。"
  },
  {
    difficulty: "medium",
    question: "【第8章】電気分解の陽極が炭素（C）で、溶液中にハロゲン化物イオンがない場合、水などが酸化されて何という気体が発生するか？",
    answer: "酸素（O2）",
    comment: "水（またはOH-）が酸化反応を起こします。"
  },
  {
    difficulty: "medium",
    question: "【第8章】電気分解の陰極において、溶液中に銅イオン（Cu2+）や銀イオン（Ag+）がある場合、電極には何が起こるか？",
    answer: "金属が析出する",
    comment: "イオン化傾向が小さい金属イオンが優先して電子を受け取ります。"
  },
  {
    difficulty: "medium",
    question: "【第8章】電気分解の陰極において、溶液中にナトリウムイオン（Na+）などのイオン化傾向が大きい金属イオンしかない場合、何が発生するか？",
    answer: "水素（H2）",
    comment: "金属イオンの代わりに水（またはH+）が還元されます。"
  },
  {
    difficulty: "medium",
    question: "【第8章】イオン化列において、「カリウム（K）」と「ナトリウム（Na）」の間に位置する元素は何か？",
    answer: "カルシウム（Ca）",
    comment: "K, Ca, Naの順になります。"
  },
  {
    difficulty: "medium",
    question: "【第8章】イオン化列において、「亜鉛（Zn）」と「ニッケル（Ni）」の間に位置する元素は何か？",
    answer: "鉄（Fe）",
    comment: "Zn, Fe, Niの順になります。"
  },
  {
    difficulty: "medium",
    question: "【第8章】イオン化列において、「銅（Cu）」と「銀（Ag）」の間に位置する元素は何か？",
    answer: "水銀（Hg）",
    comment: "Cu, Hg, Agの順になります。"
  },
  {
    difficulty: "medium",
    question: "【第8章】塩酸や希硫酸などの普通の酸に溶けて水素を発生するのは、イオン化傾向が水素（H2）より大きい金属か、小さい金属か？",
    answer: "大きい金属",
    comment: "H2よりもイオンになりやすい金属が反応します。"
  },
  {
    difficulty: "hard",
    question: "【第8章】イオン化列において、金（Au）や白金（Pt）は酸化力の強い酸にも溶けないが、何という混合酸にのみ溶けるか？",
    answer: "王水",
    comment: "非常に強い酸化力を持つ特殊な酸です。"
  },
  {
    difficulty: "hard",
    question: "【第8章】イオン化傾向が水素（H2）より小さい銅（Cu）や銀（Ag）を溶かすことができるのは、硝酸や熱濃硫酸などの何という酸か？",
    answer: "酸化力の強い酸",
    comment: "普通の酸には溶けませんが、強い酸化力を持つ酸には溶けます。"
  },
  {
    difficulty: "hard",
    question: "【第8章】鉛蓄電池が放電したとき、正極と負極の両極はともに何という物質に変化するか？",
    answer: "硫酸鉛（PbSO4）",
    comment: "充電することで元の鉛と酸化鉛に戻ります。"
  },
  {
    difficulty: "hard",
    question: "【第8章】鉛蓄電池は放電が進むと水が生成するが、これによって電解液の密度はどう変化するか？",
    answer: "下がる",
    comment: "希硫酸が消費されて水ができるため、密度が低下します。"
  },
  {
    difficulty: "hard",
    question: "【第8章】水溶液では析出させられないアルミニウムを、高温で融解させて電気分解で単体を取り出す方法を何というか？",
    answer: "融解塩電解",
    comment: "イオン化傾向が非常に大きいため、水溶液では水素が発生してしまいます。"
  },
  {
    difficulty: "hard",
    question: "【第8章】アルミニウムの融解塩電解において、酸化アルミニウム（アルミナ）を溶かすために一緒に加えられる物質は何か？",
    answer: "氷晶石",
    comment: "アルミナの融点を下げる役割があります。"
  },
  {
    difficulty: "hard",
    question: "【第8章】アルミニウムの融解塩電解において、電極として用いられる物質は何か？",
    answer: "炭素電極",
    comment: "陽極では炭素が消費されて一酸化炭素や二酸化炭素が発生します。"
  },
  {
    difficulty: "hard",
    question: "【第8章】ファラデーの法則において、電流（A）から電気量（C）を計算する際、掛ける時間の単位は何を用いなければならないか？",
    answer: "秒（s）",
    comment: "分や時間ではなく、必ず秒（s）に直して計算します。"
  },
  {
    difficulty: "hard",
    question: "【第8章】ファラデー定数の具体的な数値と単位はいくらか？",
    answer: "9.65×10の4乗 C/mol",
    comment: "電子1molあたりの電気量です。"
  },
  {
    difficulty: "hard",
    question: "【第8章】ファラデー定数を利用すると、流れた電気量から変化した物質の質量や何の体積を計算できるか？",
    answer: "気体の体積",
    comment: "析出した金属の質量や、発生した気体の体積を求められます。"
  },
  {
    difficulty: "hard",
    question: "【第8章】電気分解の陰極で水素（H2）が発生するとき、水溶液中で代わりに還元されているのは何（またはH+）か？",
    answer: "水",
    comment: "金属イオンが還元されない場合に起こります。"
  },
  {
    difficulty: "hard",
    question: "【第8章】電気分解の陽極で酸素（O2）が発生するとき、水溶液中で酸化されているのは何（またはOH-）か？",
    answer: "水",
    comment: "ハロゲン化物イオンが存在しない場合に起こります。"
  },
  {
    difficulty: "hard",
    question: "【第8章】鉛（Pb）と銅（Cu）を比較したとき、イオン化傾向が大きいのはどちらか？",
    answer: "鉛（Pb）",
    comment: "Pbは水素（H2）より大きく、Cuは水素より小さくなります。"
  },
  {
    difficulty: "hard",
    question: "【第8章】電池の仕組みにおいて、電極とするのはイオン化傾向の異なる何種類の金属か？",
    answer: "2種類",
    comment: "同じ金属では電位差が生じないため電池になりません。"
  },
  {
    difficulty: "hard",
    question: "【第8章】電気分解の陽極において、電極が白金（Pt）や炭素（C）の場合に酸素が発生するのは、溶液中に何というイオンがない場合か？",
    answer: "ハロゲン化物イオン",
    comment: "Cl-などがあると、酸素ではなくハロゲン単体が発生します。"
  },
  {
    difficulty: "soft",
    question: "【第9章】固体を一定の割合で加熱したときの温度変化のグラフを何というか？",
    answer: "加熱曲線",
    comment: "状態変化と熱エネルギーの関係を表すグラフです。"
  },
  {
    difficulty: "soft",
    question: "【第9章】融解している間や沸騰している間、加えた熱エネルギーがすべて状態変化に使われるため温度が一定になる、このときの熱を何というか？",
    answer: "潜熱",
    comment: "融解に使われる熱を融解熱、蒸発に使われる熱を蒸発熱といいます。"
  },
  {
    difficulty: "soft",
    question: "【第9章】気体分子が熱運動によって容器の内壁に衝突することで生じる力を何というか？",
    answer: "気体の圧力",
    comment: "分子の運動が圧力を生み出します。"
  },
  {
    difficulty: "soft",
    question: "【第9章】密閉容器の中で、蒸発する分子の数と凝縮する分子の数が等しくなり、見かけ上蒸発が止まった状態を何というか？",
    answer: "気液平衡",
    comment: "動的平衡の一つで、蒸発と凝縮が同じ速さで起きています。"
  },
  {
    difficulty: "soft",
    question: "【第9章】気液平衡に達したときの気体の圧力を何というか？",
    answer: "飽和蒸気圧",
    comment: "物質の種類と温度だけで決まります。"
  },
  {
    difficulty: "soft",
    question: "【第9章】温度と飽和蒸気圧の関係を表したグラフを何というか？",
    answer: "蒸気圧曲線",
    comment: "温度が高くなるほど飽和蒸気圧は大きくなります。"
  },
  {
    difficulty: "soft",
    question: "【第9章】水銀を満たしたガラス管を倒したときにできる上の隙間を利用した、大気圧や蒸気圧の測定実験を何というか？",
    answer: "トリチェリの真空",
    comment: "真空状態を利用した測定実験です。"
  },
  {
    difficulty: "soft",
    question: "【第9章】液体の飽和蒸気圧が外圧と等しくなり、液体の内部からも激しく気化が始まる現象を何というか？",
    answer: "沸騰",
    comment: "気泡が発生して激しく気化する現象です。"
  },
  {
    difficulty: "soft",
    question: "【第9章】沸騰が起こるときの温度を何というか？",
    answer: "沸点",
    comment: "外圧が下がると沸点も下がります。"
  },
  {
    difficulty: "soft",
    question: "【第9章】温度を横軸、圧力を縦軸にして、物質がどの状態で存在するかを示したグラフを何というか？",
    answer: "状態図",
    comment: "相図とも呼ばれるグラフです。"
  },
  {
    difficulty: "soft",
    question: "【第9章】状態図における、固体と液体の境界線を何というか？",
    answer: "融解曲線",
    comment: "固体の領域と液体の領域を分ける境界線です。"
  },
  {
    difficulty: "soft",
    question: "【第9章】状態図における、液体と気体の境界線を何というか？",
    answer: "蒸気圧曲線",
    comment: "液体と気体の共存状態を示す境界線です。"
  },
  {
    difficulty: "soft",
    question: "【第9章】状態図における、固体と気体の境界線を何というか？",
    answer: "昇華曲線",
    comment: "固体と気体の境界を示す線です。"
  },
  {
    difficulty: "soft",
    question: "【第9章】固体・液体・気体の3つの状態が同時に共存する点を何というか？",
    answer: "三重点",
    comment: "3つの相が共存する唯一の点です。"
  },
  {
    difficulty: "soft",
    question: "【第9章】蒸気圧曲線の終点を超えることで、液体と気体の区別がつかなくなった非常に拡散しやすい独特な状態を何というか？",
    answer: "超臨界流体",
    comment: "臨界点を超えた領域で現れます。"
  },
  {
    difficulty: "medium",
    question: "【第9章】潜熱のうち、融解しているときに加えられる熱を何というか？",
    answer: "融解熱",
    comment: "固体と液体が共存する状態で使われます。"
  },
  {
    difficulty: "medium",
    question: "【第9章】潜熱のうち、沸騰しているときに加えられる熱を何というか？",
    answer: "蒸発熱",
    comment: "液体と気体が共存する状態で使われます。"
  },
  {
    difficulty: "medium",
    question: "【第9章】飽和蒸気圧は同じ温度のとき、液体の量や容器の体積に関わって変化するか？",
    answer: "変化しない",
    comment: "物質の種類と温度だけで決まるため、一定です。"
  },
  {
    difficulty: "medium",
    question: "【第9章】温度が高くなると、液体の飽和蒸気圧はどうなるか？",
    answer: "大きくなる",
    comment: "温度上昇に伴い蒸気圧曲線は増加します。"
  },
  {
    difficulty: "medium",
    question: "【第9章】同じ温度で比較したとき、沸点が低い物質ほど飽和蒸気圧はどうなるか？",
    answer: "大きい",
    comment: "沸点が低いほど揮発しやすく蒸気圧が高くなります。"
  },
  {
    difficulty: "medium",
    question: "【第9章】沸騰が始まるのは、液体の飽和蒸気圧が液面にかかる何と等しくなったときか？",
    answer: "外圧",
    comment: "大気圧などの外圧と等しくなると内部から気化が始まります。"
  },
  {
    difficulty: "medium",
    question: "【第9章】外圧が下がると、液体の沸点はどうなるか？",
    answer: "下がる",
    comment: "外圧の低下に伴い、より低い温度で沸騰します。"
  },
  {
    difficulty: "medium",
    question: "【第9章】状態図において横軸と縦軸に取られる物理量はそれぞれ何か？",
    answer: "温度と圧力",
    comment: "横軸に温度、縦軸に圧力を取ります。"
  },
  {
    difficulty: "medium",
    question: "【第9章】蒸気圧曲線の終点のことを特に何というか？",
    answer: "臨界点",
    comment: "この点を超えると気液の区別がなくなります。"
  },
  {
    difficulty: "medium",
    question: "【第9章】水の状態図において、他の多くの物質と異なり右下がりの傾きを持つ曲線は何か？",
    answer: "融解曲線",
    comment: "水の特徴的な相図の傾きです。"
  },
  {
    difficulty: "medium",
    question: "【第9章】気液平衡の状態において、見かけ上どうなっているか？",
    answer: "蒸発が止まった状態",
    comment: "分子レベルでは起き続けていますが、見かけ上停止しているように見えます。"
  },
  {
    difficulty: "medium",
    question: "【第9章】トリチェリの真空の実験で、水銀を満たしたガラス管を倒したときに上にできる隙間は何の状態か？",
    answer: "真空状態",
    comment: "上部に真空の隙間が形成されます。"
  },
  {
    difficulty: "medium",
    question: "【第9章】気体分子が容器の内壁に衝突して圧力を生み出す原因となる分子の動きは何か？",
    answer: "熱運動",
    comment: "熱運動によって衝突が生じます。"
  },
  {
    difficulty: "medium",
    question: "【第9章】加熱曲線において、固体と液体が共存している間に加えられた熱はすべて何に使われるか？",
    answer: "状態変化",
    comment: "温度上昇ではなく状態変化に消費されます。"
  },
  {
    difficulty: "medium",
    question: "【第9章】液体と気体が共存している沸騰している間に加えられた熱は、温度を上げる代わりに何に使われるか？",
    answer: "状態変化",
    comment: "温度が一定に保たれるのは状態変化に使われるためです。"
  },
  {
    difficulty: "hard",
    question: "【第9章】水の融解曲線が右下がりの傾きを持つことは、高圧をかけると氷（固体）がどうなる性質を意味するか？",
    answer: "液体（水）になる",
    comment: "圧力を上げると融点が下がり溶けやすくなります。"
  },
  {
    difficulty: "hard",
    question: "【第9章】二酸化炭素の状態図における三重点の圧力は、大気圧（1気圧）と比較して高いか低いか？",
    answer: "高い",
    comment: "そのため通常の1気圧ではドライアイスは液体を経ずに直接昇華します。"
  },
  {
    difficulty: "hard",
    question: "【第9章】超臨界流体が得られるのは、状態図のどの曲線の終点を超えたときか？",
    answer: "蒸気圧曲線",
    comment: "蒸気圧曲線の終点である臨界点を超えると超臨界流体になります。"
  },
  {
    difficulty: "hard",
    question: "【第9章】超臨界流体の特徴として、液体と気体の区別がつかないほかに、どのような特性を持つか？",
    answer: "非常に拡散しやすい",
    comment: "独特の拡散性を示す状態です。"
  },
  {
    difficulty: "hard",
    question: "【第9章】三重点は、何個の状態が同時に共存する点か？",
    answer: "3つの状態",
    comment: "固体、液体、気体が同時に共存します。"
  },
  {
    difficulty: "hard",
    question: "【第9章】三重点において、固体・液体・気体が共存する数はいくつか？",
    answer: "同時共存する唯一の点",
    comment: "特殊な1つの点として存在します。"
  },
  {
    difficulty: "hard",
    question: "【第9章】水と二酸化炭素の状態図を比較したとき、どのような違いがあるか？",
    answer: "状態図の特徴の違い（融解曲線の傾きなど）",
    comment: "融解曲線の傾きの方向などに相違点が見られます。"
  },
  {
    difficulty: "hard",
    question: "【第9章】気液平衡に達したとき、同じ温度であれば、液体の量によって飽和蒸気圧の値は変わるか？",
    answer: "変わらない（一定）",
    comment: "液体の量には依存しない性質を持ちます。"
  },
  {
    difficulty: "hard",
    question: "【第9章】気液平衡において、液体から飛び出す分子の数を何というか？",
    answer: "蒸発",
    comment: "蒸発と凝縮の数が等しくなります。"
  },
  {
    difficulty: "hard",
    question: "【第9章】気液平衡において、気体から液体に戻る分子の数を何というか？",
    answer: "凝縮",
    comment: "蒸発とバランスがつり合います。"
  },
  {
    difficulty: "hard",
    question: "【第9章】沸騰しているとき、液体の内部から発生するものは何か？",
    answer: "気泡",
    comment: "内部から激しく気泡が発生します。"
  },
  {
    difficulty: "hard",
    question: "【第9章】物質の状態図において、固体と気体の境界線である昇華曲線はどこに伸びているか？",
    answer: "三重点へ向かう境界",
    comment: "三重点を起点・終点として各線が交わります。"
  },
  {
    difficulty: "hard",
    question: "【第9章】状態図の蒸気圧曲線は、液体とどの状態の境界を表しているか？",
    answer: "気体",
    comment: "液体と気体の境界線です。"
  },
  {
    difficulty: "hard",
    question: "【第9章】状態図の融解曲線は、どの2つの状態の境界を表しているか？",
    answer: "固体と液体",
    comment: "固体領域と液体領域の境目です。"
  },
  {
    difficulty: "hard",
    question: "【第9章】加えた熱エネルギーがすべて状態変化に使われることで温度が一定になる現象は、どの状態変化の共存時に見られるか？",
    answer: "固体と液体、または液体と気体が共存する間",
    comment: "潜熱が関与する区間です。"
  },
  {
    difficulty: "soft",
    question: "【第10章】結晶中の粒子の規則正しい空間的な配列を何というか？",
    answer: "結晶格子",
    comment: "その規則的な並びの繰り返しの最小単位を「単位格子」といいます。"
  },
  {
    difficulty: "soft",
    question: "【第10章】結晶格子における規則的な並びの繰り返しの最小単位を何というか？",
    answer: "単位格子",
    comment: "結晶全体の性質を知るための基本となる構造です。"
  },
  {
    difficulty: "soft",
    question: "【第10章】1つの粒子に最も隣り合って接している粒子の数を何というか？",
    answer: "配位数",
    comment: "結晶構造によってこの数は異なります。"
  },
  {
    difficulty: "soft",
    question: "【第10章】単位格子の体積の中に粒子が占めている割合を何というか？",
    answer: "充填率",
    comment: "空間がどの程度粒子で満たされているかを示す指標です。"
  },
  {
    difficulty: "soft",
    question: "【第10章】原子や分子の配列に規則性がない固体を何というか？",
    answer: "アモルファス",
    comment: "非晶質とも呼ばれます。"
  },
  {
    difficulty: "soft",
    question: "【第10章】アモルファスの日本語での別の呼び方は何か？",
    answer: "非晶質",
    comment: "アモルファス（amorphous）は「無定形の」という意味です。"
  },
  {
    difficulty: "soft",
    question: "【第10章】ガラスやゴムは、結晶とアモルファスのどちらに分類されるか？",
    answer: "アモルファス",
    comment: "プラスチックもアモルファスの一種です。"
  },
  {
    difficulty: "soft",
    question: "【第10章】ダイヤモンドや黒鉛は、何結合の結晶か？",
    answer: "共有結合",
    comment: "共有結合のネットワークでガッチリつながった立体構造を持ちます。"
  },
  {
    difficulty: "soft",
    question: "【第10章】ヨウ素(I2)やドライアイス(CO2)は、どのような力が働いて結晶を作っているか？",
    answer: "分子間力",
    comment: "分子結晶と呼ばれます。"
  },
  {
    difficulty: "soft",
    question: "【第10章】NaやFeがとる金属結晶の構造は何か？",
    answer: "体心立方格子",
    comment: "立方体の中心と各頂点に原子が配置されています。"
  },
  {
    difficulty: "soft",
    question: "【第10章】Al、Cu、Agがとる金属結晶の構造は何か？",
    answer: "面心立方格子",
    comment: "立方体の各面の中心と各頂点に原子が配置されています。"
  },
  {
    difficulty: "soft",
    question: "【第10章】MgやZnがとる金属結晶の構造は何か？",
    answer: "六方最密構造",
    comment: "正六角柱をベースとした構造です。"
  },
  {
    difficulty: "soft",
    question: "【第10章】塩化ナトリウム(NaCl)の結晶は、何結晶に分類されるか？",
    answer: "イオン結晶",
    comment: "陽イオンと陰イオンが規則正しく配列しています。"
  },
  {
    difficulty: "soft",
    question: "【第10章】二酸化ケイ素は、何結合の結晶か？",
    answer: "共有結合",
    comment: "ダイヤモンドなどと同じく、共有結合のネットワークを持ちます。"
  },
  {
    difficulty: "soft",
    question: "【第10章】プラスチックは、原子や分子の配列に規則性があるか、ないか？",
    answer: "ない",
    comment: "アモルファス（非晶質）に分類されます。"
  },
  {
    difficulty: "medium",
    question: "【第10章】体心立方格子の単位格子に含まれる原子の数は何個か？",
    answer: "2個",
    comment: "中心に1個、各頂点に1/8個×8の計2個です。"
  },
  {
    difficulty: "medium",
    question: "【第10章】体心立方格子の配位数はいくつか？",
    answer: "8",
    comment: "中心の原子は、8つの頂点の原子と接しています。"
  },
  {
    difficulty: "medium",
    question: "【第10章】体心立方格子の充填率は何％か？",
    answer: "68%",
    comment: "面心立方格子や六方最密構造よりも少し隙間が多い構造です。"
  },
  {
    difficulty: "medium",
    question: "【第10章】面心立方格子の単位格子に含まれる原子の数は何個か？",
    answer: "4個",
    comment: "頂点に1/8個×8、面の中心に1/2個×6の計4個です。"
  },
  {
    difficulty: "medium",
    question: "【第10章】面心立方格子の配位数はいくつか？",
    answer: "12",
    comment: "六方最密構造と同じく、最も密に詰まった構造の一つです。"
  },
  {
    difficulty: "medium",
    question: "【第10章】面心立方格子の充填率は何％か？",
    answer: "74%",
    comment: "六方最密構造と同じ充填率です。"
  },
  {
    difficulty: "medium",
    question: "【第10章】六方最密構造の単位格子あたりに含まれる原子の数は何個か？",
    answer: "2個",
    comment: "六角柱全体で考える場合と、その1/3（単位格子）で考える場合があります。"
  },
  {
    difficulty: "medium",
    question: "【第10章】六方最密構造の配位数はいくつか？",
    answer: "12",
    comment: "面心立方格子と同じく、最も密に詰まった構造の一つです。"
  },
  {
    difficulty: "medium",
    question: "【第10章】六方最密構造の充填率は何％か？",
    answer: "74%",
    comment: "面心立方格子と同じく、球を最も隙間なく詰めた状態です。"
  },
  {
    difficulty: "medium",
    question: "【第10章】体心立方格子の単位格子の各頂点にある原子は、単位格子内に実質何個分含まれているか？",
    answer: "1/8個",
    comment: "8つの頂点で1/8×8=1個分となります。"
  },
  {
    difficulty: "medium",
    question: "【第10章】面心立方格子の単位格子の各面の中心にある原子は、単位格子内に実質何個分含まれているか？",
    answer: "1/2個",
    comment: "6つの面で1/2×6=3個分となります。"
  },
  {
    difficulty: "medium",
    question: "【第10章】Al（アルミニウム）の結晶格子の充填率は何％か？",
    answer: "74%",
    comment: "Alは面心立方格子なので、充填率は74%です。"
  },
  {
    difficulty: "medium",
    question: "【第10章】Fe（鉄）の結晶格子の充填率は何％か？",
    answer: "68%",
    comment: "Feは体心立方格子なので、充填率は68%です。"
  },
  {
    difficulty: "medium",
    question: "【第10章】Zn（亜鉛）の結晶格子の配位数はいくつか？",
    answer: "12",
    comment: "Znは六方最密構造なので、配位数は12です。"
  },
  {
    difficulty: "medium",
    question: "【第10章】Na（ナトリウム）の単位格子に含まれる原子数は何個か？",
    answer: "2個",
    comment: "Naは体心立方格子なので、2個含まれます。"
  },
  {
    difficulty: "hard",
    question: "【第10章】NaCl型のイオン結晶の構造において、「NaCl型」は何と読むか？",
    answer: "塩化ナトリウム型",
    comment: "代表的なイオン結晶の構造の一つです。"
  },
  {
    difficulty: "hard",
    question: "【第10章】CsCl型のイオン結晶の構造において、「CsCl型」は何と読むか？",
    answer: "塩化セシウム型",
    comment: "NaCl型とは異なる配位数とイオンの配置を持ちます。"
  },
  {
    difficulty: "hard",
    question: "【第10章】ZnS型のイオン結晶の構造において、「ZnS型」の代表的な名称は何か？",
    answer: "閃亜鉛鉱型",
    comment: "せんあえんこうがた、と読みます。"
  },
  {
    difficulty: "hard",
    question: "【第10章】CaF2型のイオン結晶の構造において、「CaF2型」の代表的な名称は何か？",
    answer: "ホタル石型",
    comment: "陽イオンと陰イオンの数が1:2の割合になる結晶構造の例です。"
  },
  {
    difficulty: "hard",
    question: "【第10章】Cu2O型のイオン結晶の構造において、「Cu2O型」の代表的な名称は何か？",
    answer: "酸化銅1型",
    comment: "酸化銅(I)の結晶構造です。"
  },
  {
    difficulty: "hard",
    question: "【第10章】アモルファスは一定の融点をもつか、もたないか？",
    answer: "もたない",
    comment: "結晶とは異なり、明確な融点を示しません。"
  },
  {
    difficulty: "hard",
    question: "【第10章】アモルファスを加熱すると徐々に柔らかくなる温度を何というか？",
    answer: "軟化点",
    comment: "融点の代わりに、この軟化点が特徴的な温度として現れます。"
  },
  {
    difficulty: "hard",
    question: "【第10章】ガラスを加熱したとき、明確な温度で液体に変わるか、徐々に柔らかくなるか？",
    answer: "徐々に柔らかくなる",
    comment: "ガラスはアモルファスであるため、一定の融点を持ちません。"
  },
  {
    difficulty: "hard",
    question: "【第10章】イオン結晶の構造の中で、塩化セシウムは何型の構造をとるか？",
    answer: "CsCl型",
    comment: "体心の位置と頂点の位置に異なるイオンが配置される構造です。"
  },
  {
    difficulty: "hard",
    question: "【第10章】イオン結晶の構造の中で、塩化ナトリウムは何型の構造をとるか？",
    answer: "NaCl型",
    comment: "陽イオンと陰イオンが交互に面心立方格子のように配置された構造です。"
  },
  {
    difficulty: "hard",
    question: "【第10章】イオン結晶の型（NaCl型、CsCl型など）によって、単位格子に含まれる何が異なるか？２つ答えよ。",
    answer: "イオンの数や配位数",
    comment: "イオンの大きさの比率などによって、安定な構造が変わります。"
  },
  {
    difficulty: "hard",
    question: "【第10章】一定の融点をもたないのは、結晶とアモルファスのどちらか？",
    answer: "アモルファス",
    comment: "規則正しい配列がないため、結合が切れる温度に幅があります。"
  },
  {
    difficulty: "hard",
    question: "【第10章】ゴムは加熱するとある温度から徐々に柔らかくなる。この温度を何と呼ぶか？",
    answer: "軟化点",
    comment: "ゴムもアモルファスの一種です。"
  },
  {
    difficulty: "hard",
    question: "【第10章】閃亜鉛鉱型は、何という化学式の物質の代表的な結晶構造か？",
    answer: "ZnS",
    comment: "硫化亜鉛の結晶構造の一つです。"
  },
  {
    difficulty: "hard",
    question: "【第10章】ホタル石型は、何という化学式の物質の代表的な結晶構造か？",
    answer: "CaF2",
    comment: "フッ化カルシウムの結晶構造です。"
  }
];