import React from "react";
import "./ModelInformation.scss";
import SwinArchitecture from "./modelinfo/model-1.png";
import Encoder1 from "./modelinfo/model-2.png";
import Encoder2 from "./modelinfo/encoder-2.png";
import Encoder3 from "./modelinfo/encoder3.png";
import Encoder4 from "./modelinfo/encoder4.png"

export default function ModelInformation() {
  return (
    <div className="swin-unetr-container">
    <h2>SwinUNETR Architecture</h2>
    <div className="section">
        <p>The SwinUNETR architecture is a type of convolutional neural network (CNN) for medical image segmentation . It is based on the Swin Transformer, a recently developed transformer architecture that has shown good performance in image classification tasks.</p>
        <img  style={{margin:"30px"}}src={SwinArchitecture} alt="" />
        <p>The U-shaped structure of the SwinUNETR architecture consists of an encoder part, which down samples the input image to extract features, and a decoder part, which up samples the features to produce the segmentation mask. The encoder and decoder are connected by skip connections, which allow the model to propagate information from the early stages of the encoder to the later stages of the decoder.</p>
    </div>

    {/* Encoder Section */}
    <div className="section">
      <h3>Encoder</h3>
      <p>
        The Swin UNETR creates non-overlapping patches of the input data and uses a patch partition layer to create windows with a desired size for computing the self-attention.
      </p>
      <p>The Swin UNETR encoder has a patch size of 2×2×2 and a feature dimension of 2×2×2×4 = 32, taking into account the multi-modal MRI images with 4 channels. The size of the embedding space C is 48.</p>
      <p>Swin UNETR encoder has 4 stages which comprise of 2 transformer blocks at each stage. Hence, the total number of layers in the encoder is L=8.</p>
      <div style={{display:"flex",justifyContent:"center"}}>
      <img  src={Encoder1} alt="" />
      </div>
      <p>A patch merging layer is utilized to decrease the resolution of feature representations by a factor of 2 at the end of each stage. In addition, it groups patches with resolution 2×2×2 and concatenates them, resulting in a 4C-dimensional feature embedding. The feature size of the representations is subsequently reduced to 2C with a linear layer.</p>
      <div style={{display:"flex",justifyContent:"center"}}>
      <img src={Encoder2} alt="" />
      </div>
      <img  style={{height:"300px",width:"100%"}}src={Encoder3} alt="" />
      <p>The window utilized is of dimension M×M×M and in SW – MSA the window shifts by (M/2,M/2,M/2) voxels. The output of window multiheaded self-attention (W-MSA) is calculated as:</p>
      <p>z ̂^l  = W-MSA (LN(z^(l-1) ))+z^(l-1)...(1) </p>
      <p>Where;</p>
      <p>z^l  = MLP (LN(z ̂^l ))+z ̂^l</p>
      <p>Similarly,</p>
      <p>z ̂^(l+1)  =SW-MSA (LN(z^l ))+z^l...(2)</p>
      <p>Where;</p>
      <p>z^l  = MLP (LN(z ̂^l ))+z ̂^l</p>
      <p>For efficient computation of the shifted window mechanism, a 3D cyclic-shifting is leveraged and self-attention is computed according to:</p>
      <p>Attention(Q,K,V )= Softmax ((QK^T)/√d)V ...(3)</p>

    </div>

    {/* Decoder Section */}
    <div className="section">
      <h3>Decoder</h3>
      <p>
      The Swin UNETR incorporates a U-shaped network design, featuring an encoder and a decoder with skip connections. This design facilitates the reuse of extracted features from the encoder during the decoding process. The encoder comprises multiple stages (indexed as i ϵ {0,1,2,3,4}  and bottelneck as i= 5  ), where features are extracted from multi-modal MRI images and reshaped to dimensions (H/2^i ,B/2^i ,D/2^i )  . Each stage includes a residual block with two 3x3x3 convolutional layers normalized through instance normalization. The output of the residual block is added to its input through a shortcut connection, preserving information for subsequent stages. The resolution of feature maps is increased by a factor of 2 after the bottleneck stage using a deconvolutional layer .
      </p>
      <p>The deconvolved features are then concatenated with outputs from the previous stage, merging low-level and high-level information to enhance representation. The concatenated features pass through another residual block, and the final segmentation outputs for brain tumor regions (Edema, Whole Tumor, and Tumor Core) are computed using a 1x1x1 convolutional layer with a sigmoid activation function. </p>
      <img style={{height:"300px",width:"100%"}} src={Encoder4} alt="" />

      {/* Add more content based on your document */}
    </div>

    {/* Implementational Details Section */}
    <div className="section">
      <h3>Implementational Details</h3>
      <p>
        The soft Dice loss function computed in a voxel-wise manner according to the following equation was used:
      </p>
      <p>L(G,Y) = 1-  2/J ∑_(j=1)^J▒〖(∑_(i=1)^Ι▒〖G_(i,j) Y_(i,j) 〗)/(∑_(i=1)^Ι▒〖G_(i,j)〗^2 +∑_(i=1)^Ι▒〖Y_(i,j)〗^2 )</p>
      <p>Where, I denotes voxels numbers; J is classes number; Y_ijand Gij denote the probability of output and one-hot encoded ground truth for class j at voxel i, respectively.</p>
      <p>Swin UNETR was trained using PyTorch and MONAI and trained on a 2 T4 GPUs made available by Kaggle. The learning rate is set to 0.0001 with a decay rate of 0.0001.</p>
      {/* Add more content based on your document */}
    </div>
  </div>
  );
}


